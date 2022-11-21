import { Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import Subheader, { SubheaderProps } from "./Subheader";

const { width } = Dimensions.get("window");

interface ScrollSubHeaderProps extends SubheaderProps {
  x: SharedValue<number>;
  index: number;
}

const ScrollSubHeader = ({ x, index, ...props }: ScrollSubHeaderProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      x.value / width,
      [index - 1, index, index + 1],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      opacity,
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Subheader {...props} />
    </Animated.View>
  );
};

export default ScrollSubHeader;
