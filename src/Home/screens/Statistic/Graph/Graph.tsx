import { memo } from "react";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { Box } from "../../../../components";
import { useTheme } from "../../../../components";
import { lerp } from "../../../utils/lerp";
import Underlay from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
export const STEP = 40;
const aspectRatio = 195 / 305;

type Point = {
  value: number;
  date: number | string;
  color: string;
};

interface GraphProps {
  data: Point[];
}

export const PADDING = "xxl";

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme();
  const x = useSharedValue(0);

  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  // const width = canvasWidth - theme.spacing[PADDING];
  const height = canvasHeight - theme.spacing[PADDING];
  const values = data.map(({ value }) => value);
  const dates = data.map(({ date }) => date);
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  const onScroll = useAnimatedScrollHandler((e) => {
    x.value = e.contentOffset.x;
  });

  return (
    <Box
      height={canvasHeight}
      paddingLeft={PADDING}
      paddingBottom={PADDING}
      marginTop="l"
    >
      <Underlay {...{ minY, maxY, dates, x }} />

      <Box {...{ height }}>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          {...{ onScroll }}
        >
          <Box width={data.length * STEP}>
            {data.map((point, i) => {
              if (point.value === 0) {
                return null;
              }

              return (
                <Box
                  key={point.date}
                  position="absolute"
                  left={i * STEP}
                  bottom={0}
                  width={STEP}
                  height={lerp(0, height, point.value / maxY)}
                  alignItems="center"
                >
                  <Box
                    width={STEP / 2}
                    position="absolute"
                    top={0}
                    bottom={0}
                    borderTopLeftRadius="xl"
                    borderTopRightRadius="xl"
                    opacity={0.1}
                    style={{ backgroundColor: point.color }}
                  />

                  <Box
                    width={STEP / 2}
                    position="absolute"
                    top={0}
                    height={32}
                    borderRadius="xl"
                    style={{ backgroundColor: point.color }}
                  />
                </Box>
              );
            })}
          </Box>
        </Animated.ScrollView>
      </Box>
    </Box>
  );
};

export default memo(Graph);
