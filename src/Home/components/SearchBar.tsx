import {
  TextInput,
  TextInputProps,
  Dimensions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text, RoundIconButton, useTheme } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { ChangeEvent, useRef } from "react";
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  SharedValue,
  Extrapolate,
  withTiming,
} from "react-native-reanimated";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

export const SEARCH_HEIGHT = 35;
const SEARCH_WIDTH = WINDOW_WIDTH * 0.9;
const SEARCH_PADDING = (WINDOW_WIDTH - SEARCH_WIDTH) / 2;
export const CLOSE_BUTTON_WIDTH = 55;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export interface SearchBarProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

const SearchBar = ({
  x,
  y,
  value,
  onClear,
  onFocus,
  onBlur,
  onChangeText,
  ...props
}: SearchBarProps) => {
  const theme = useTheme();
  const search = useRef<TextInput>(null);

  const scrollInputBoxStyle = useAnimatedStyle(() => {
    const height = interpolate(
      y.value,
      [0, SEARCH_HEIGHT],
      [SEARCH_HEIGHT, 0],
      Extrapolate.CLAMP
    );

    return { height };
  });

  const scrollInputInnerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      y.value,
      [0, SEARCH_HEIGHT / 4],
      [1, 0],
      Extrapolate.CLAMP
    );

    return { opacity };
  });

  const focusInputConteinerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [0, CLOSE_BUTTON_WIDTH],
      [0, -(SEARCH_HEIGHT + theme.spacing.s)]
    );

    return { transform: [{ translateY }] };
  });

  const focusInputStyle = useAnimatedStyle(() => {
    const width = interpolate(
      x.value,
      [0, CLOSE_BUTTON_WIDTH],
      [SEARCH_WIDTH, SEARCH_WIDTH - CLOSE_BUTTON_WIDTH]
    );

    return { width };
  });

  const focusCloseButtonStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      x.value,
      [0, CLOSE_BUTTON_WIDTH - SEARCH_PADDING / 2],
      [CLOSE_BUTTON_WIDTH, 0]
    );

    return { transform: [{ translateX }] };
  });

  const handlePressBlurButton = () => {
    search.current?.blur();
    onClear();
  };

  return (
    <AnimatedBox
      flexDirection="row"
      top={0}
      bottom={0}
      style={[{ paddingHorizontal: SEARCH_PADDING }, focusInputConteinerStyle]}
    >
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width={SEARCH_WIDTH - CLOSE_BUTTON_WIDTH}
        height={SEARCH_HEIGHT}
        borderRadius="m"
        paddingHorizontal="s"
        backgroundColor="grey"
        style={[focusInputStyle, scrollInputBoxStyle]}
      >
        <AnimatedBox
          flex={1}
          alignItems="center"
          flexDirection="row"
          style={scrollInputInnerStyle}
        >
          <Box marginRight="s">
            <Icon name="search" size={16} />
          </Box>

          <TextInput
            ref={search}
            placeholder="Поиск..."
            placeholderTextColor="#000"
            style={{ flex: 1 }}
            {...{ value, onBlur, onFocus, onChangeText }}
            {...props}
          />
        </AnimatedBox>

        {value && (
          <RoundIconButton
            name="x"
            size={20}
            backgroundColor="#fff"
            color="#000"
            onPress={onClear}
          />
        )}
      </AnimatedBox>

      <AnimatedBox
        height={SEARCH_HEIGHT}
        width={CLOSE_BUTTON_WIDTH}
        justifyContent="center"
        alignContent="center"
        position="absolute"
        right={0}
        style={focusCloseButtonStyle}
      >
        <TouchableOpacity onPress={handlePressBlurButton}>
          <Text variant="button" color="primary">
            Отмена
          </Text>
        </TouchableOpacity>
      </AnimatedBox>
    </AnimatedBox>
  );
};

export default SearchBar;

// TODO 1: убрать useAnimatedStyle [x]
// TODO 2. x-value должно быть в props [x]
// TODO 3. headerOffsetYOnFocus заменить на x-value [x]
// TODO 4: при скролле < SEARCH_HEIGHT добавить автоскролл до нужной позиции [x]
// TODO 5: создать компонент контейнера для 3 экранов с ( хедер, поиск, flatList || ..., bottom: как хедер в drawer ) [ ]
