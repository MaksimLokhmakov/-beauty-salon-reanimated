import { Box } from "./Theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const AnimatedBox = Animated.createAnimatedComponent(Box);

const SWITCH_WIDTH = 50;
const SWITCH_HEIGHT = 30;
const SWITCH_PADDING = SWITCH_HEIGHT * 0.1;
const SELECTOR_SIZE = SWITCH_HEIGHT / 1.2;
const SELECTOR_TRANSLATE_X = SWITCH_WIDTH - SELECTOR_SIZE - SWITCH_PADDING * 2;

interface SwitchProps {
  active: boolean;
  onPress?: () => void;
}

const Switch = ({ active, onPress }: SwitchProps) => {
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(active ? SELECTOR_TRANSLATE_X : 0);
  }, [active]);

  const selectorStyle = useAnimatedStyle(() => {
    const scaleX = interpolate(
      translateX.value,
      [0, SELECTOR_TRANSLATE_X / 2, SELECTOR_TRANSLATE_X],
      [1, 1.35, 1]
    );

    return { transform: [{ translateX: translateX.value }, { scaleX }] };
  });

  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        width={SWITCH_WIDTH}
        height={SWITCH_HEIGHT}
        style={{ borderRadius: SWITCH_HEIGHT / 1, padding: SWITCH_PADDING }}
        backgroundColor="primaryLight"
      >
        <AnimatedBox
          width={SELECTOR_SIZE}
          height={SELECTOR_SIZE}
          backgroundColor="primary"
          style={[{ borderRadius: SWITCH_HEIGHT / 1 }, selectorStyle]}
        />
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
