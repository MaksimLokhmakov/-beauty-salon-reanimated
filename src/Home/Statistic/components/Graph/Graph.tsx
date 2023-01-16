import { memo, useLayoutEffect } from "react";
import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Box, useTheme } from "../../../../components";
import { lerp } from "../../../utils/helpers";
import Underlay from "./Underlay";
import moment from "moment";

const { width: wWidth } = Dimensions.get("window");
export const STEP = 40;
export const PADDING = "xxl";
const aspectRatio = 195 / 305;

export type PointType = {
  value: number;
  date: Date;
  color: string;
};

interface GraphProps {
  data: PointType[];
  datesPresentetionVariant: "hour" | "month" | "year" | "full";
}

const Graph = ({ data, datesPresentetionVariant }: GraphProps) => {
  const theme = useTheme();
  const x = useSharedValue(0);

  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[PADDING];
  const height = canvasHeight - theme.spacing[PADDING];
  const values = data.map(({ value }) => value);
  const dates = data.map(({ date }) =>
    moment(date).format(
      datesPresentetionVariant === "full"
        ? "YYYY"
        : datesPresentetionVariant === "year"
        ? "MMM"
        : datesPresentetionVariant === "month"
        ? "DD"
        : "HH"
    )
  );
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  const onScroll = useAnimatedScrollHandler((e) => {
    x.value = e.contentOffset.x;
  });

  const pointsConteinerOpacity = useSharedValue(0);
  const pointsConteinerTranslateY = useSharedValue(height);

  const pointsConteinerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: pointsConteinerTranslateY.value }],
    opacity: pointsConteinerOpacity.value,
  }));

  useLayoutEffect(() => {
    pointsConteinerTranslateY.value = withTiming(0, {
      duration: 650,
    });

    pointsConteinerOpacity.value = withTiming(1, { duration: 300 });
  }, []);

  return (
    <Box
      width={canvasWidth}
      height={canvasHeight}
      paddingLeft={PADDING}
      paddingBottom={PADDING}
      marginTop="l"
    >
      <Underlay {...{ minY, maxY, dates, x }} />

      <Box {...{ height, width }}>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={16}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          {...{ onScroll }}
        >
          <Animated.View
            style={[
              { width: data.length * STEP, height },
              pointsConteinerStyle,
            ]}
          >
            {data.map((point, i) => {
              if (point.value === 0) {
                return null;
              }

              return (
                <Box
                  key={point.date.toString()}
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
          </Animated.View>
        </Animated.ScrollView>
      </Box>
    </Box>
  );
};

export default memo(Graph);
