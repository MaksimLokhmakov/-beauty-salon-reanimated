import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import theme, { Box } from "../Theme";
import RoundIcon from "../RoundIcon";
import { Feather as Icon } from "@expo/vector-icons";
import { forwardRef } from "react";
import MaskInput from "react-native-mask-input";

type iconNameType = "phone" | "lock" | "user" | "message-circle";

interface TextInputProps extends RNTextInputProps {
  icon?: iconNameType;
  error?: string;
  touched?: boolean;
  mask?: (RegExp | string)[];
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, mask, error, touched, ...props }: TextInputProps, ref) => {
    const state = !touched ? "pristine" : !error ? "valid" : "invalid";
    const Input = mask ? MaskInput : RNTextInput;

    const colors = {
      valid: "primary",
      invalid: "danger",
      pristine: "text",
    };

    const color = colors[state] as keyof typeof theme.colors;

    return (
      <Box
        height={48}
        borderRadius="s"
        borderWidth={1}
        borderColor={color}
        flexDirection="row"
        alignItems="center"
      >
        <Box padding="s">
          <Icon name={icon} size={16} color={theme.colors[color]} />
        </Box>
        <Box flex={1}>
          <Input
            underlineColorAndroid="transparent"
            placeholderTextColor="#151624"
            mask={mask}
            {...{ ref }}
            {...props}
          />
        </Box>

        {touched && (
          <Box margin="s">
            <RoundIcon
              name={!error ? "check" : "x"}
              color="white"
              size={SIZE}
              backgroundColor={theme.colors[color]}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
