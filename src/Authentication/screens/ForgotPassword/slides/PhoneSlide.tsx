import { Dimensions, TextInputProps as RNTextInputProps } from "react-native";
import { Box, Text, TextInput, Button } from "../../../../components";
import { phoneInputMask } from "../../../utils/consts";

const { width } = Dimensions.get("window");

interface PhoneSlideProps extends RNTextInputProps {
  error: string | undefined;
  touched: boolean | undefined;
  onSubmit: () => void;
}

const PhoneSlide = ({
  error,
  touched,
  onSubmitEditing,
  onSubmit,
  ...props
}: PhoneSlideProps) => {
  const handleSubmit = () => {
    return !error && touched ? onSubmit() : () => {};
  };

  return (
    <Box padding="xl" justifyContent="center" {...{ width }}>
      <Text variant="title1" padding="s">
        Забыли пароль?
      </Text>
      <Text variant="body" paddingTop="s" paddingBottom="l">
        Введите номер телефона к которому привязан ваш аккаунт
      </Text>

      <Box marginBottom="s">
        <TextInput
          icon="phone"
          mask={phoneInputMask}
          maxLength={17}
          keyboardType={"default"}
          placeholder="Введите моб. номер"
          onSubmitEditing={handleSubmit}
          {...{ error, touched }}
          {...props}
        />
      </Box>

      <Box alignItems="center" marginTop="xl">
        <Button
          variant={!error && touched ? "primary" : "default"}
          onPress={handleSubmit}
          label="Продолжить"
        />
      </Box>
    </Box>
  );
};

export default PhoneSlide;
