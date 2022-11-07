import { Image, StyleSheet, Dimensions } from "react-native";
import theme, { Box } from "./Theme";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width, height } = Dimensions.get("window");
const totalWidth = width + 1;
const shiftTop = -1 * (height > 700 ? height / 3.5 : height / 2.5);
const { xl } = theme.borderRadii;

export const assets = [
  require("../../assets/patterns/1.jpg"),
  require("../../assets/patterns/4.jpg"),
  require("../../assets/patterns/3.jpg"),
  require("../../assets/patterns/2.jpg"),
] as const;

interface ConteinerProps {
  children: ReactNode;
  footer?: ReactNode;
  pattern: 0 | 1 | 2 | 3;
  rightBottomBorder?: boolean;
  leftBottomBorder?: boolean;
}

const Conteiner = ({
  children,
  footer,
  pattern,
  rightBottomBorder,
  leftBottomBorder,
}: ConteinerProps) => {
  const insets = useSafeAreaInsets();
  const topPatternImage = {
    borderBottomLeftRadius: leftBottomBorder ? xl : 0,
    borderBottomRightRadius: rightBottomBorder ? xl : 0,
  };
  const asset = assets[pattern];

  return (
    <>
      <StatusBar style="dark" />
      <Box flex={1} backgroundColor="secondary">
        <Box flex={1} overflow="hidden">
          <Box
            backgroundColor="white"
            width={totalWidth}
            height={height * 0.2}
            position="absolute"
          >
            <Image
              source={asset}
              style={[topPatternImage, styles.topPatternImage]}
            />
          </Box>

          <Box
            top={totalWidth - 1 + shiftTop}
            borderBottomRightRadius="xl"
            borderBottomLeftRadius="xl"
            overflow="hidden"
          >
            <Image source={asset} style={styles.topCornerPatternImage} />

            <Box
              width={totalWidth}
              backgroundColor="white"
              borderTopLeftRadius={leftBottomBorder ? 0 : "xl"}
              borderTopRightRadius={rightBottomBorder ? 0 : "xl"}
              borderBottomRightRadius="xl"
              borderBottomLeftRadius="xl"
              maxHeight={height * 0.71}
            >
              <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
            </Box>
          </Box>
        </Box>

        <Box alignItems="center" justifyContent="center" marginTop="l">
          {footer}

          <Box height={insets.bottom} />
        </Box>
      </Box>
    </>
  );
};

Conteiner.defaultProps = {
  variant: "bottomRightRadius",
};

export default Conteiner;

const styles = StyleSheet.create({
  topPatternImage: {
    ...StyleSheet.absoluteFillObject,
    width: totalWidth,
    height: width,
    top: shiftTop,
  },
  topCornerPatternImage: {
    ...StyleSheet.absoluteFillObject,
    width: totalWidth,
    height: totalWidth,
    top: -1,
    left: -1,
    right: 0,
    bottom: 0,
    borderBottomRightRadius: xl,
    borderBottomLeftRadius: xl,
  },
});