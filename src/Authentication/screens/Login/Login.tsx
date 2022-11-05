import { TextInput as RNTextInput, TouchableOpacity } from "react-native";
import { TextInput, Checkbox } from "../../../components/Form";
import { Box, Text } from "../../../components/Theme";
import { Button, Conteiner } from "../../../components";
import { phoneInputMask } from "../../utils/consts";
import { useRef } from "react";
import { useFormik } from "formik";
import { Footer } from "../../components";
import { Routes, StackNavigationProps } from "../../../components/Navigation";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  phone: Yup.string()
    .min(17, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const password = useRef<RNTextInput>(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { phone: "", password: "", remember: false },
    validationSchema: LoginSchema,
    onSubmit: ({ phone, password, remember }) =>
      alert(`Phone: ${phone}, Password: ${password}, Remember: ${remember}`),
  });

  const footer = (
    <Footer
      onPress={() => navigation.navigate("SignUp")}
      title="Нет аккаунта?"
      action="Зарегистрируйтесь тут"
    />
  );
  return (
    <Conteiner leftBottomBorder {...{ footer }}>
      <Box>
        <Text variant="title1" padding="s">
          Добро пожаловать
        </Text>
        <Text variant="body" paddingTop="s" paddingBottom="l">
          Используйте ваши данные ниже, чтобы авторизироваться
        </Text>

        <Box marginBottom="s">
          <TextInput
            icon="phone"
            placeholder="Введите моб. номер"
            value={values.phone}
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            mask={phoneInputMask}
            maxLength={17}
            error={errors.phone}
            touched={touched.phone}
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Введите пароль"
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            autoComplete="password"
            autoCapitalize="none"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />
        </Box>

        <Box
          flexDirection="row"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Checkbox
            checked={values.remember}
            onChange={() => {
              setFieldValue("remember", !values.remember);
            }}
            label="Запомнить"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Забыли пароль
            </Text>
          </TouchableOpacity>
        </Box>

        <Box alignItems="center" marginTop="xl">
          <Button
            label="Войти"
            variant={
              touched && !errors.phone && !errors.password
                ? "primary"
                : "default"
            }
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Conteiner>
  );
};

export default Login;
