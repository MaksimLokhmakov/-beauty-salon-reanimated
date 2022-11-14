import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Box } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { INFO_BOX_HEIGHT, INFO_BOX_WIDTH } from "./InfoBox";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const RIGHT_ICON_BOX_SIZE = 45;

interface RightButtonProps {
  translateX: SharedValue<number>;
}

const RightButton = ({ translateX }: RightButtonProps) => {
  const rightButtonConteinerStyle = useAnimatedStyle(() => ({
    width: -translateX.value,
  }));

  const rightButtonStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -INFO_BOX_HEIGHT], [0, 1]),
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [0, -INFO_BOX_HEIGHT],
          [0, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
    borderRadius: interpolate(
      translateX.value,
      [-INFO_BOX_HEIGHT, -INFO_BOX_HEIGHT * 1.5],
      [RIGHT_ICON_BOX_SIZE / 2, 5],
      Extrapolate.CLAMP
    ),
    width: interpolate(
      translateX.value,
      [-INFO_BOX_HEIGHT, -INFO_BOX_HEIGHT * 1.5, -INFO_BOX_WIDTH],
      [RIGHT_ICON_BOX_SIZE, INFO_BOX_HEIGHT * 1.5, INFO_BOX_WIDTH]
    ),
    height: interpolate(
      translateX.value,
      [-INFO_BOX_HEIGHT, -INFO_BOX_HEIGHT * 1.5],
      [RIGHT_ICON_BOX_SIZE, INFO_BOX_HEIGHT],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <AnimatedBox
      position="absolute"
      right={0}
      alignItems="center"
      justifyContent="center"
      height={INFO_BOX_HEIGHT}
      width={INFO_BOX_HEIGHT}
      style={rightButtonConteinerStyle}
    >
      <AnimatedBox
        alignItems="center"
        justifyContent="center"
        backgroundColor="danger"
        height={RIGHT_ICON_BOX_SIZE}
        style={rightButtonStyle}
      >
        <Icon name="trash-2" size={25} color="white" />
      </AnimatedBox>
    </AnimatedBox>
  );
};

export default RightButton;
