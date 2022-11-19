import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { Box, Text, useTheme } from "../../../../components/Theme";
import { STEP } from "./Graph";
import { lerp } from "../../../utils/lerp";
import { PADDING } from "./Graph";
import { SharedValue } from "react-native-reanimated";

interface UnderlayProps {
  minY: number;
  maxY: number;
  dates: (number | string)[];
  x: SharedValue<number>;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);
export const ROW_HIGHT = 20;
const TOP_VALUES = {
  0: ROW_HIGHT / 2,
  1: -ROW_HIGHT / 2,
  0.75: -ROW_HIGHT / 4,
  0.25: ROW_HIGHT / 4,
} as const;

const Underlay = ({ maxY, minY, dates, x }: UnderlayProps) => {
  const theme = useTheme();

  const datesStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: -x.value }] };
  });

  return (
    <AnimatedBox style={StyleSheet.absoluteFill} justifyContent="flex-end">
      <Box flex={1} alignItems="flex-start" justifyContent="space-between">
        {([1, 0.75, 0.5, 0.25, 0] as (keyof typeof TOP_VALUES)[]).map(
          (progress) => (
            <Box
              key={progress}
              flexDirection="row"
              alignItems="center"
              top={TOP_VALUES[progress] ?? 0}
            >
              <Box width={theme.spacing[PADDING]} height={ROW_HIGHT}>
                <Text
                  variant="body"
                  fontSize={14}
                  textAlign="right"
                  marginRight="s"
                >
                  {Math.round(lerp(minY, maxY, progress))}
                </Text>
              </Box>

              <Box flex={1} height={1} backgroundColor="grey" />
            </Box>
          )
        )}
      </Box>

      <Box marginLeft={PADDING} overflow="hidden">
        <AnimatedBox
          width={STEP * dates.length}
          height={theme.spacing[PADDING]}
          alignItems="center"
          flexDirection="row"
          style={datesStyle}
        >
          {dates.map((date) => {
            const cDate =
              typeof date === "number" ? ("0" + date).slice(-2) : date;

            return (
              <Box key={date} width={STEP}>
                <Text variant="body" fontSize={14}>
                  {cDate}
                </Text>
              </Box>
            );
          })}
        </AnimatedBox>
      </Box>
    </AnimatedBox>
  );
};

export default Underlay;
