import { TouchableOpacity } from "react-native";
import React from "react";
import { Box, Text } from "../../components";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => (
  <Box flexDirection="row" paddingHorizontal="xl" marginVertical="m">
    <Text variant="body" color="white" marginRight="s">
      {title}
    </Text>
    <TouchableOpacity {...{ onPress }}>
      <Text variant="body" color="primary">
        {action}
      </Text>
    </TouchableOpacity>
  </Box>
);

export default Footer;
