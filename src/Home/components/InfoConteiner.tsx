import { ReactNode, memo } from "react";
import { StyleSheet, Dimensions } from "react-native";

import { Box, Text } from "../../components";

const { width } = Dimensions.get("window");

interface InfoConteinerProps {
  children: ReactNode;
  title?: string;
}

const InfoConteiner = ({ children, title }: InfoConteinerProps) => {
  return (
    <Box>
      {title && (
        <Text
          variant="body"
          fontSize={17}
          textAlign="left"
          marginBottom="s"
          paddingLeft="l"
        >
          {title}
        </Text>
      )}

      <Box
        width={width * 0.9}
        alignSelf="center"
        borderRadius="m"
        padding="s"
        backgroundColor="white"
        style={styles.shadow}
      >
        {children}
      </Box>
    </Box>
  );
};

export default memo(InfoConteiner);

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 11.14,

    elevation: 7,
  },
});
