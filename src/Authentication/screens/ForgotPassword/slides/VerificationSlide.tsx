import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  Dimensions,
} from "react-native";
import { Box, Text, Button, useTheme, RoundIcon } from "../../../../components";
import ConfirmationCodeField from "../../../../components/Form/ConfirmationCodeField";
import { forwardRef } from "react";

const { width } = Dimensions.get("window");

interface PhoneSlideProps extends RNTextInputProps {
  error: string | undefined;
  touched: boolean | undefined;
  value: string;
  onSubmit: () => void;
  onPressConfirmationCodeField: () => void;
}

const VerificationSlide = forwardRef<RNTextInput, PhoneSlideProps>(
  (
    { error, touched, onSubmit, value, onPressConfirmationCodeField, ...props },
    ref
  ) => {
    const theme = useTheme();
    const { primary, primaryLight } = theme.colors;
    const handleSubmit = () => {
      return !error && touched ? onSubmit() : () => {};
    };

    return (
      <Box padding="xl" justifyContent="center" {...{ width }}>
        <Box width="100%" justifyContent="center" alignItems="center">
          <RoundIcon
            name="lock"
            size={100}
            iconSize={60}
            backgroundColor={primaryLight}
            color={primary}
          />
        </Box>

        <Text variant="body" paddingTop="s" paddingBottom="l">
          Введите код из сообщения отправленного на ваш номер
        </Text>

        <Box justifyContent="center" alignItems="center" width="100%">
          <ConfirmationCodeField
            onPress={onPressConfirmationCodeField}
            onSubmitEditing={handleSubmit}
            {...{ error, touched, value, ref }}
            {...props}
          />
        </Box>

        <Box alignItems="center" marginTop="xl">
          <Button
            variant={!error && touched ? "primary" : "default"}
            onPress={handleSubmit}
            label="Подтвердить"
          />
        </Box>
      </Box>
    );
  }
);

export default VerificationSlide;
