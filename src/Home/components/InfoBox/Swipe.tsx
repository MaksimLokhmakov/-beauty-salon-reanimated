import Animated, {
  runOnJS,
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
  onDelete: () => void;
}

const Swipe = ({
  simultaneousHandlers,
  right,
  children,
  onDelete,
}: SwipeProps) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(INFO_BOX_HEIGHT);
  const itemOpacity = useSharedValue(1);
  const iconOpacity = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (e) => {
      if (e.translationX < 0) translateX.value = e.translationX;

      if (-translateX.value > INFO_BOX_HEIGHT) {
        return (iconOpacity.value = withTiming(1));
      }

      iconOpacity.value = withTiming(0);
    },
    onEnd: () => {
      if (-translateX.value > INFO_BOX_HEIGHT) {
        translateX.value = withTiming(-INFO_BOX_WIDTH);
        itemHeight.value = withTiming(0);
        iconOpacity.value = withTiming(0, { duration: 100 });
        itemOpacity.value = withTiming(0, undefined, runOnJS(onDelete));
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

  const rightContentStyle = useAnimatedStyle(() => {
    return { opacity: iconOpacity.value };
  });

  return (
    <AnimatedBox
      width={INFO_BOX_WIDTH}
      height={INFO_BOX_HEIGHT}
      backgroundColor="white"
      style={infoBoxConteinerStyle}
    >
      <AnimatedBox position="absolute" right={0} style={rightContentStyle}>
        {right}
      </AnimatedBox>

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
