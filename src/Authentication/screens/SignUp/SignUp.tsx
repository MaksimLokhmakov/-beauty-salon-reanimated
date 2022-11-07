import { Button, Conteiner } from "../../../components";
import { Box, Text } from "../../../components/Theme";
import { Footer } from "../../components";
import React, { useRef, useState } from "react";
import { Routes, StackNavigationProps } from "../../../components/Navigation";
import { useFormik } from "formik";
import { TextInput as RNTextInput, TouchableOpacity } from "react-native";
import { Checkbox, TextInput } from "../../../components/Form";
import { phoneInputMask } from "../../utils/consts";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(17, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .min(7, "Too Short!")
    .max(17, "Too Long!")
    .equals([Yup.ref("password")], "Password don`t match")
    .required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const surname = useRef<RNTextInput>(null);
  const phone = useRef<RNTextInput>(null);
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      phone: "",
      password: "",
      passwordConfirmation: "",
      remember: false,
    },
    validationSchema: SignUpSchema,
    onSubmit: ({ name, surname, phone, password, remember }) =>
      alert(
        `Name: ${name}, Surname: ${surname},  Phone: ${phone}, Password: ${password}, Remember: ${remember}`
      ),
  });

  const footer = (
    <Footer
      onPress={() => navigation.navigate("Login")}
      title="Уже есть аккаунт?"
      action="Войти"
    />
  );

  return (
    <Conteiner pattern={2} rightBottomBorder {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" padding="s">
          Создать аккаунт
        </Text>
        <Text variant="body" paddingTop="s" paddingBottom="l">
          Сообщите нам ваше имя, моб. телефон, пароль
        </Text>

        <Box marginBottom="s">
          <TextInput
            icon="user"
            placeholder="Введите имя"
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            error={errors.name}
            touched={touched.name}
            returnKeyLabel="next"
            returnKeyType="next"
            onSubmitEditing={() => surname.current?.focus()}
          />
        </Box>

        <Box marginBottom="s">
          <TextInput
            icon="user"
            ref={surname}
            placeholder="Введите фамилию"
            value={values.surname}
            onChangeText={handleChange("surname")}
            onBlur={handleBlur("surname")}
            error={errors.surname}
            touched={touched.surname}
            returnKeyLabel="next"
            returnKeyType="next"
            onSubmitEditing={() => phone.current?.focus()}
          />
        </Box>

        <Box marginBottom="s">
          <TextInput
            ref={phone}
            icon="phone"
            placeholder="Введите моб. номер"
            value={values.phone}
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            mask={phoneInputMask}
            maxLength={17}
            error={errors.phone}
            touched={touched.phone}
            returnKeyLabel="next"
            returnKeyType="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>

        <Box marginBottom="s">
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
            returnKeyLabel="next"
            returnKeyType="next"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
            secureTextEntry={!passwordVisible}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Повторите пароль"
            value={values.passwordConfirmation}
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            autoComplete="password"
            autoCapitalize="none"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry={!passwordVisible}
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

          <TouchableOpacity onPress={() => setPasswordVisible((prev) => !prev)}>
            <Text variant="button" color="primary">
              {`${passwordVisible ? "Скрыть" : "Показать"} пароль`}
            </Text>
          </TouchableOpacity>
        </Box>

        <Box alignItems="center" marginTop="xl">
          <Button label="Создать" variant={"primary"} onPress={handleSubmit} />
        </Box>
      </Box>
    </Conteiner>
  );
};

export default SignUp;
