import React, { useRef, useState } from "react";
import theme, { Box, Text } from "../Theme";
import {
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedText = Animated.createAnimatedComponent(Text);
const { width: wWidth } = Dimensions.get("window");

const INPUT_CONTEINER_WIDTH = wWidth * 0.8;
const INPUT_CONTEINER_HEIGHT = 45;
const INPUT_CONTEINER_PADDING = theme.spacing.s;
const LABEL_HEIGHT = 20;
const LABEL_MARGIN_BOTTOM = theme.spacing.s / 2;
const LABEL_TRANSLATE_Y =
  INPUT_CONTEINER_HEIGHT / 4 + LABEL_HEIGHT + LABEL_MARGIN_BOTTOM;
const INPUT_ICON_SIZE = 24;

const config = {
  duration: 200,
};

const TextInput2 = () => {
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(true);
  const input = useRef<TextInput>(null);

  const translateY = useSharedValue(LABEL_TRANSLATE_Y);
  const translateX = useSharedValue(INPUT_CONTEINER_PADDING);
  const fontSize = useSharedValue(14);

  const handleFocus = () => {
    translateY.value = withTiming(0, config);
    translateX.value = withTiming(0, config);
    fontSize.value = withTiming(13, config);
  };

  const handleBlur = () => {
    if (!empty) return;

    translateY.value = withTiming(LABEL_TRANSLATE_Y, config);
    translateX.value = withTiming(INPUT_CONTEINER_PADDING, config);
    fontSize.value = withTiming(14, config);
  };

  const handleChangeText = (text: string) => {
    setValue(text);

    if (text !== "") {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };

  const animatedLabelConteinerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value },
    ],
  }));

  const animatedLabelTextStyle = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
  }));

  return (
    <TouchableWithoutFeedback onPress={() => input.current?.focus()}>
      <Box
        flexDirection="column-reverse"
        height={INPUT_CONTEINER_HEIGHT + LABEL_HEIGHT / 2}
      >
        <Box
          width={INPUT_CONTEINER_WIDTH}
          height={INPUT_CONTEINER_HEIGHT}
          borderWidth={1}
          borderRadius="s"
          borderColor="secondary"
          flexDirection="row"
          alignItems="center"
          padding="s"
        >
          <TextInput
            ref={input}
            onChangeText={handleChangeText}
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={styles.input}
            {...{ value }}
          />

          {!empty && (
            <TouchableOpacity>
              <Icon
                name="x"
                size={INPUT_ICON_SIZE}
                color={theme.colors.darkGrey}
              />
            </TouchableOpacity>
          )}
        </Box>

        <AnimatedBox
          height={LABEL_HEIGHT}
          style={[
            animatedLabelConteinerStyle,
            { marginBottom: LABEL_MARGIN_BOTTOM },
          ]}
        >
          <AnimatedText
            variant="body"
            textAlign="left"
            color="secondary"
            style={animatedLabelTextStyle}
          >
            Моб. номер
          </AnimatedText>
        </AnimatedBox>
      </Box>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    width:
      INPUT_CONTEINER_WIDTH - INPUT_ICON_SIZE - INPUT_CONTEINER_PADDING * 2,
  },
});

export default TextInput2;
