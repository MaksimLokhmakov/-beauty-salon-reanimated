import { useRef } from "react";
import { Box, Dot, useTheme, RoundIconButton } from "../../../components";
import Graph, { PointType } from "./Graph";
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
  datesPresentetionVariant: "hour" | "month" | "year" | "full";
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
  const theme = useTheme();
  const x = useSharedValue(0);
  const scroll = useRef<Animated.ScrollView>(null);

  const onScroll = useAnimatedScrollHandler((e) => {
    x.value = e.contentOffset.x;
  });

  return (
    <Box paddingBottom="s" position="relative">
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
        ref={scroll}
        horizontal
        scrollEnabled={false}
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
          <Dot key={index} {...{ index, x }} />
        ))}
      </Box>

      <Box
        paddingHorizontal="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        height={35}
        bottom={0}
        left={0}
        right={0}
      >
        <RoundIconButton
          name="arrow-left"
          size={30}
          backgroundColor={theme.colors.primaryLight}
          color={theme.colors.primary}
          onPress={() => scroll.current?.scrollTo({ x: 0 })}
        />

        <RoundIconButton
          name="arrow-right"
          size={30}
          backgroundColor={theme.colors.primaryLight}
          color={theme.colors.primary}
          onPress={() => scroll.current?.scrollTo({ x: wWidth })}
        />
      </Box>
    </Box>
  );
};

export default GraphsSlider;
