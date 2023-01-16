import React, { ReactNode } from "react";
import { Dimensions } from "react-native";
import { Box, theme } from "../../../../components";

const { height } = Dimensions.get("window");
const BOTTOM_PIECE_HEIGHT = height * 0.15;

const BottomPiece = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={BOTTOM_PIECE_HEIGHT}
    >
      <Box
        bottom={BOTTOM_PIECE_HEIGHT + theme.borderRadii.xl * 2}
        right={150}
        position="absolute"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          height={theme.borderRadii.xl * 2}
          width={theme.borderRadii.xl * 2}
          backgroundColor="secondary"
        />

        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          height={theme.borderRadii.xl * 2}
          width={theme.borderRadii.xl * 2}
          backgroundColor="white"
          borderBottomRightRadius="xl"
        />
      </Box>

      <Box
        flex={1}
        backgroundColor="secondary"
        borderTopLeftRadius="xl"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </Box>
  );
};

export default BottomPiece;
