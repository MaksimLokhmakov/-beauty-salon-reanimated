import { TextInput } from "../../../components/Form";
import { Box, Text } from "../../../components/Theme";
import { Button, Conteiner } from "../../../components";
import { phoneInputMask } from "../../utils/consts";
import { useFormik } from "formik";
import { Footer } from "../../components";
import { Routes, StackNavigationProps } from "../../../components/Navigation";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  phone: Yup.string()
    .min(17, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(4, "Too Short!")
    .max(4, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .min(7, "Too Short!")
    .max(17, "Too Long!")
    .equals([Yup.ref("password")], "Password don`t match")
    .required("Required"),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ForgotPassword">) => {
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
      phone: "",
      password: "",
      message: "",
      passwordConfirmation: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: ({ phone, password, message, passwordConfirmation }) =>
      alert(`Phone: ${phone}, Password: ${password}, Remember: ${message}`),
  });

  const footer = (
    <Footer
      onPress={() => {}}
      title="Не получилось?"
      action="Попробуйте другой вариант"
    />
  );

  return (
    <Conteiner {...{ footer }}>
      <Box>
        <Text variant="title1" padding="s">
          Забыли пароль?
        </Text>
        <Text variant="body" paddingTop="s" paddingBottom="l">
          Введите номер телефона к которому привязан ваш аккаунт
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
            // onSubmitEditing={() => password.current?.focus()}
          />
        </Box>

        <Box alignItems="center" marginTop="xl">
          <Button
            label="Продолжить"
            variant={!errors.phone ? "primary" : "default"}
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Conteiner>
  );
};

export default ForgotPassword;
