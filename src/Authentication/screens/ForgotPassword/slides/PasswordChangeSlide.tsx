import { forwardRef, useRef, useState } from "react";
import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Box, Text, TextInput, Button } from "../../../../components";

const { width } = Dimensions.get("window");

interface PhoneSlideProps extends RNTextInputProps {
  error: string | undefined;
  touched: boolean | undefined;
  cValue: string;
  cOnChange: (e: any) => void;
  cOnBlur: (e: any) => void;
  cError: string | undefined;
  cTouched: boolean | undefined;
  onSubmit: () => void;
}

const PasswordChangeSlide = forwardRef<RNTextInput, PhoneSlideProps>(
  (
    {
      error,
      touched,
      cValue,
      cOnChange,
      cOnBlur,
      cError,
      cTouched,
      onSubmit,
      ...props
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const passwordConfirmation = useRef<RNTextInput>(null);
    const errors = !error && !cError && cTouched && touched;

    const handleSubmit = () => {
      return errors ? onSubmit() : () => {};
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
            icon="lock"
            maxLength={15}
            keyboardType={"default"}
            placeholder="Введите пароль"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
            secureTextEntry={passwordVisible}
            {...{ error, touched, ref }}
            {...props}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Повторите пароль"
            value={cValue}
            onChangeText={cOnChange}
            onBlur={cOnBlur}
            maxLength={15}
            error={cError}
            touched={cTouched}
            onSubmitEditing={() => setPasswordVisible(true)}
            secureTextEntry={passwordVisible}
          />
        </Box>

        <TouchableOpacity onPress={() => setPasswordVisible((prev) => !prev)}>
          <Text variant="button" color="primary" textAlign="left">
            {`${!passwordVisible ? "Скрыть" : "Показать"} пароль`}
          </Text>
        </TouchableOpacity>

        <Box alignItems="center" marginTop="xl">
          <Button
            variant={errors ? "primary" : "default"}
            onPress={handleSubmit}
            label="Изменить пароль"
          />
        </Box>
      </Box>
    );
  }
);

export default PasswordChangeSlide;
