import { useEffect, memo } from "react";
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
import { Box } from "../../components";
import { InfoBoxProps } from "./InfoBox";
import { ReactNode } from "react";
import * as Haptics from "expo-haptics";

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface SwipeProps extends Pick<InfoBoxProps, "simultaneousHandlers"> {
  right: ReactNode;
  children: ReactNode;
  onDelete: () => void;
  swipeable: boolean;
  cWidth: number;
  cHeight: number;
  inTransition?: boolean;
}

const Swipe = ({
  simultaneousHandlers,
  right,
  children,
  cWidth,
  cHeight,
  onDelete,
  swipeable,
  inTransition = false,
}: SwipeProps) => {
  const translateX = useSharedValue(inTransition ? -cWidth : 0);
  const itemHeight = useSharedValue(inTransition ? 0 : cHeight);
  const itemOpacity = useSharedValue(inTransition ? 0 : 1);
  const iconOpacity = useSharedValue(0);

  const haptic = () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (e) => {
      if (e.translationX < 0) translateX.value = e.translationX;

      if (-translateX.value > cHeight && iconOpacity.value === 0) {
        return (iconOpacity.value = withTiming(
          1,
          { duration: 100 },
          runOnJS(haptic)
        ));
      } else if (-translateX.value < cHeight && iconOpacity.value === 1) {
        iconOpacity.value = withTiming(0);
      }
    },
    onEnd: () => {
      if (-translateX.value > cHeight) {
        translateX.value = withTiming(-cWidth);
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

  useEffect(() => {
    if (!inTransition) return;

    itemHeight.value = withTiming(cHeight);
    itemOpacity.value = withTiming(1, { duration: 250 });
    translateX.value = withTiming(0);
  }, []);

  return swipeable ? (
    <AnimatedBox
      width={cWidth}
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
  ) : (
    <>{children}</>
  );
};

export default memo(Swipe);
