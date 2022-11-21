import { StyleSheet, Dimensions } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  dot: {
    borderRadius: 4,
    height: 8,
    width: 8,
    margin: 4,
    backgroundColor: "#2cb9b0",
  },
});

interface DotProps {
  index: number;
  x: SharedValue<number>;
}

const Dot = ({ index, x }: DotProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      x.value / width,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      x.value / width,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

export default Dot;
