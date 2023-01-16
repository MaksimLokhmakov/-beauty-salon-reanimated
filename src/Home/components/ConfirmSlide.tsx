import { Dimensions } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

import {
  Box,
  Text,
  RoundIconButton,
  useTheme,
  largeDevice,
} from "../../components";

const AnimateBox = Animated.createAnimatedComponent(Box);

const { width } = Dimensions.get("window");
const CONFIRM_SLIDE_WIDTH = width * 0.85;
const CONFIRM_SLIDE_HEIGHT = 60;
const SWIPE_TO_CONFIRM_LENGTH = CONFIRM_SLIDE_WIDTH - CONFIRM_SLIDE_HEIGHT;

interface ConfirmSlideProps {
  onConfirm: () => void;
  label?: string;
}

const ConfirmSlide = ({
  onConfirm,
  label = "Проведите, чтобы сохранить",
}: ConfirmSlideProps) => {
  const theme = useTheme();

  const translateX = useSharedValue(0);
  const labelOpacity = useSharedValue(0);

  const haptic = () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (e) => {
      if (
        e.translationX >= SWIPE_TO_CONFIRM_LENGTH * 0.99 &&
        translateX.value !== SWIPE_TO_CONFIRM_LENGTH
      ) {
        translateX.value = withTiming(
          SWIPE_TO_CONFIRM_LENGTH,
          { duration: 50 },
          runOnJS(haptic)
        );
      } else if (
        e.translationX >= 0 &&
        e.translationX <= SWIPE_TO_CONFIRM_LENGTH
      ) {
        translateX.value = e.translationX;
        labelOpacity.value = e.translationX;
      }
    },
    onEnd: () => {
      translateX.value = withTiming(
        0,
        {},
        translateX.value === SWIPE_TO_CONFIRM_LENGTH
          ? runOnJS(onConfirm)
          : () => {}
      );
      labelOpacity.value = withTiming(0);
    },
  });

  const pieceStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const labelStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      labelOpacity.value,
      [0, SWIPE_TO_CONFIRM_LENGTH / 10],
      [1, 0],
      Extrapolate.CLAMP
    );

    return {
      opacity,
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <AnimateBox {...{ width }} alignSelf="center">
        <Box
          width={CONFIRM_SLIDE_WIDTH}
          height={CONFIRM_SLIDE_HEIGHT}
          alignSelf="center"
          backgroundColor="primary"
          flexDirection="row"
          style={{ borderRadius: CONFIRM_SLIDE_HEIGHT / 2 }}
        >
          <AnimateBox
            position="absolute"
            width={CONFIRM_SLIDE_HEIGHT}
            height={CONFIRM_SLIDE_HEIGHT}
            alignItems="center"
            justifyContent="center"
            style={pieceStyle}
          >
            <RoundIconButton
              name="check"
              size={CONFIRM_SLIDE_HEIGHT - 10}
              iconSize={35}
              onPress={() => true}
              backgroundColor={theme.colors.primaryLight}
              color={theme.colors.primary}
            />
          </AnimateBox>

          <AnimateBox flex={1} justifyContent="center" style={labelStyle}>
            <Text
              variant="body"
              color="primaryLight"
              fontSize={largeDevice ? 16 : 14}
            >
              {label}
            </Text>
          </AnimateBox>
        </Box>
      </AnimateBox>
    </PanGestureHandler>
  );
};

export default ConfirmSlide;
