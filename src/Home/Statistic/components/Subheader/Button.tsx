import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../../../components";
import React from "react";

const SUBHEADER_BUTTON_HEIGHT = 35;

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({ onPress, title }: ButtonProps) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <Box
        height={SUBHEADER_BUTTON_HEIGHT}
        paddingVertical="s"
        paddingHorizontal="m"
        backgroundColor="primaryLight"
        alignItems="center"
        justifyContent="center"
        style={{ borderRadius: SUBHEADER_BUTTON_HEIGHT / 2 }}
      >
        <Text variant="button" color="primary">
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
