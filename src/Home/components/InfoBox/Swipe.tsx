import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { Box } from "../../../components";
import { InfoBoxProps } from "./InfoBox";
import { INFO_BOX_WIDTH, INFO_BOX_HEIGHT } from "./InfoBox";
import { ReactNode } from "react";

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface SwipeProps extends Pick<InfoBoxProps, "simultaneousHandlers"> {
  right: ReactNode;
  children: ReactNode;
  translateX: SharedValue<number>;
}

const Swipe = ({
  simultaneousHandlers,
  right,
  children,
  translateX,
}: SwipeProps) => {
  const itemHeight = useSharedValue(INFO_BOX_HEIGHT);
  const itemOpacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (e) => {
      translateX.value = e.translationX < 0 ? e.translationX : 0;
    },
    onEnd: () => {
      const shouldBeDeleted = -translateX.value > INFO_BOX_HEIGHT * 1.5;

      if (shouldBeDeleted) {
        translateX.value = withTiming(-INFO_BOX_WIDTH);
        itemHeight.value = withTiming(0);
        itemOpacity.value = withTiming(0);
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const gestureStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const infoBoxConteinerStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
    opacity: itemOpacity.value,
  }));

  return (
    <AnimatedBox
      width={INFO_BOX_WIDTH}
      height={INFO_BOX_HEIGHT}
      backgroundColor="white"
      style={infoBoxConteinerStyle}
    >
      {right}

      <PanGestureHandler
        onGestureEvent={panGesture}
        {...{ simultaneousHandlers }}
      >
        <AnimatedBox style={gestureStyle}>{children}</AnimatedBox>
      </PanGestureHandler>
    </AnimatedBox>
  );
};

export default Swipe;
