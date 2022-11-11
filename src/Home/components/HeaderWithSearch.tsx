import Header, { HeaderProps, HEADER_HEIGHT } from "./Header";
import { Dimensions } from "react-native";
import SearchBar, {
  SearchBarProps,
  SEARCH_HEIGHT,
  CLOSE_BUTTON_WIDTH,
} from "./SearchBar";
import { Box, theme, useTheme } from "../../components";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height: WINDOW_HEIGHT } = Dimensions.get("window");
const HEADER_WITH_SEARCH_PADDING_BOTTOM = theme.spacing.s;
export const HEADER_WITH_SEARCH_HEIGHT =
  HEADER_HEIGHT + SEARCH_HEIGHT + HEADER_WITH_SEARCH_PADDING_BOTTOM;

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface HeaderWithSearchProps extends HeaderProps, SearchBarProps {}

const HeaderWithSearch = ({
  x,
  y,
  left,
  right,
  title,
  onChangeText,
  value,
  onBlur,
  onFocus,
  onClear,
}: HeaderWithSearchProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const currentHeight =
    HEADER_WITH_SEARCH_HEIGHT + insets.top || theme.spacing.m;

  const inputFocusHeight = useAnimatedStyle(() => {
    const height = interpolate(
      x.value,
      [0, CLOSE_BUTTON_WIDTH],
      [currentHeight, currentHeight - HEADER_HEIGHT]
    );

    return { height };
  });

  const inputFocusTranslateY = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [0, CLOSE_BUTTON_WIDTH],
      [0, -currentHeight]
    );

    return { transform: [{ translateY }] };
  });

  const scrollHeight = useAnimatedStyle(() => {
    const height = interpolate(
      y.value,
      [-WINDOW_HEIGHT, 0, SEARCH_HEIGHT],
      [WINDOW_HEIGHT, currentHeight, currentHeight - SEARCH_HEIGHT],
      Extrapolate.CLAMP
    );

    return { height };
  });

  return (
    <AnimatedBox
      position="absolute"
      justifyContent="space-between"
      top={0}
      left={0}
      right={0}
      backgroundColor="white"
      borderBottomColor="darkGrey"
      borderBottomWidth={1}
      zIndex={1}
      elevation={1}
      style={[
        { paddingBottom: HEADER_WITH_SEARCH_PADDING_BOTTOM },
        scrollHeight,
        inputFocusHeight,
      ]}
    >
      <AnimatedBox style={inputFocusTranslateY}>
        <Header {...{ y, left, right, title }} />
      </AnimatedBox>

      <SearchBar {...{ x, y, onChangeText, value, onClear, onBlur, onFocus }} />
    </AnimatedBox>
  );
};

export default HeaderWithSearch;
