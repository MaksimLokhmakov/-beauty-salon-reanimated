import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "../../components/Theme";
import React from "react";

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = height * 0.61;

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: ((right ? 1 : -1) * width) / 2 + (right ? -1 : 1) * 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.conteiner}>
      <View style={[styles.titleConteiner, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  conteiner: {
    width,
  },
  titleConteiner: {
    height: 100,
    justifyContent: "center",
  },
});
