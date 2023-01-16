import { ReactNode } from "react";
import { Dimensions } from "react-native";

import { Box, useTheme, largeDevice } from "../../components";
const { height } = Dimensions.get("screen");
const CONTEINER_HEIGHT = height * (largeDevice ? 0.2 : 0.15);

interface HeaderConteinerProps {
  children: ReactNode;
}

const HeaderConteiner = ({ children }: HeaderConteinerProps) => {
  const theme = useTheme();

  return (
    <Box height={CONTEINER_HEIGHT}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="secondary"
        borderBottomRightRadius="xl"
      >
        {children}
      </Box>

      <Box top={CONTEINER_HEIGHT} position="absolute">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          height={theme.borderRadii.xl}
          width={theme.borderRadii.xl}
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
          borderTopLeftRadius="xl"
        />
      </Box>
    </Box>
  );
};

export default HeaderConteiner;
