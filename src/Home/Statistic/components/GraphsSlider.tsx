import { Box, Dot } from "../../../components";
import Graph, { PointType } from "./Graph/Graph";
import React from "react";
import { Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import ScrollSubHeader from "./ScrollSubHeader";

const { width: wWidth } = Dimensions.get("window");

interface GraphsSlider {
  data: PointType[][];
  datesPresentetionVariant: "month" | "year" | "full";
  interval: string;
  subheaderButtonTitle: string;
  onPressSubheaderButton: () => void;
}

const GraphsSlider = ({
  data,
  datesPresentetionVariant,
  onPressSubheaderButton,
  subheaderButtonTitle,
  interval,
}: GraphsSlider) => {
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((e) => {
    x.value = e.contentOffset.x;
  });

  return (
    <Box paddingBottom="s">
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height={50}
      >
        {data.map((cData, index) => {
          const totalProfit = cData.reduce(
            (total, point) => total + point.value,
            0
          );

          return (
            <Box key={index} position="absolute" width={wWidth}>
              <ScrollSubHeader
                onPressButton={onPressSubheaderButton}
                buttonTitle={subheaderButtonTitle}
                mode={index === 0 ? "rubles" : "clients"}
                {...{ totalProfit, interval, index, x }}
              />
            </Box>
          );
        })}
      </Box>

      <Animated.ScrollView
        horizontal
        snapToInterval={wWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        {...{ onScroll }}
      >
        {data.map((data) => (
          <Box width={wWidth}>
            <Graph {...{ data, datesPresentetionVariant }} />
          </Box>
        ))}
      </Animated.ScrollView>

      <Box
        width={wWidth}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        {data.map((_, index) => (
          <Dot {...{ index, x }} />
        ))}
      </Box>
    </Box>
  );
};

export default GraphsSlider;
