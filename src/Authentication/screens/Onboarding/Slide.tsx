import { Dimensions } from "react-native";
import { Text, Box } from "../../../components/Theme";
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
    <Box {...{ width }}>
      <Box height={100} justifyContent="center" style={{ transform }}>
        <Text variant="hero">{title}</Text>
      </Box>
    </Box>
  );
};

export default Slide;
