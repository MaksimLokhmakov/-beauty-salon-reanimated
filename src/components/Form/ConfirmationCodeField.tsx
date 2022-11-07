import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Dimensions,
} from "react-native";
import { Box, Text } from "../Theme";
import { forwardRef } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.6;

interface ConfirmationCodeFieldProps extends RNTextInputProps {
  value: string;
  onPress?: () => void;
  error?: string | undefined;
  touched?: boolean | undefined;
}

const ConfirmationCodeField = forwardRef<
  RNTextInput,
  ConfirmationCodeFieldProps
>(({ value, onPress, ...props }, ref) => {
  const values = value.split("");

  return (
    <Box minWidth={width} maxWidth={width}>
      <RNTextInput
        style={styles.input}
        maxLength={4}
        {...props}
        {...{ value, ref }}
      />

      <TouchableWithoutFeedback style={styles.conteiner} {...{ onPress }}>
        {new Array(4).fill(0).map((_, index) => (
          <Box
            key={index}
            width={width / 5}
            height={width / 5}
            justifyContent="center"
            alignItems="center"
            backgroundColor={values[index] ? "primary" : "grey"}
            borderRadius="m"
          >
            <Text variant="title2" color="white">
              {values[index]}
            </Text>
          </Box>
        ))}
      </TouchableWithoutFeedback>
    </Box>
  );
});

export default ConfirmationCodeField;

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    display: "none",
  },
  field: {
    fontSize: 18,
  },
});
