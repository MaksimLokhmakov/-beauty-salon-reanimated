import * as Yup from "yup";
import { useFormik } from "formik";

import { Box, Text, TextInput, theme } from "../../../../components";
import { ConfirmSlide } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ChangeMasterSchema = Yup.object().shape({
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
  percent: Yup.number()
    .positive()
    .integer()
    .min(1, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(17, "Too Long!")
    .required("Required"),
});

interface EditProps {
  name: string;
  phone: string;
  password: string;
  percent: number;
}

const Edit = ({ name, phone, percent, password }: EditProps) => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: name.split(" ")[0],
        surname: name.split(" ")[1],
        phone: phone,
        percent: (percent * 100).toFixed().toString(),
        password: password,
      },
      validationSchema: ChangeMasterSchema,
      onSubmit: () => {},
    });

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      extraScrollHeight={120}
      contentContainerStyle={{ paddingBottom: theme.spacing.xxl * 2 }}
    >
      <Box paddingHorizontal="xl" paddingTop="s">
        <Text variant="body" textAlign="left" marginBottom="s">
          Личная инфромация
        </Text>

        <Box marginBottom="s" width="100%">
          <TextInput
            icon="user"
            placeholder="Имя"
            value={values.name}
            onChangeText={handleChange("name")}
            error={errors.name}
            touched={true}
          />
        </Box>

        <Box marginBottom="s" width="100%">
          <TextInput
            icon="users"
            placeholder="Фамилия"
            value={values.surname}
            onChangeText={handleChange("surname")}
            error={errors.surname}
            touched={true}
          />
        </Box>

        <Box marginBottom="s" width="100%">
          <TextInput
            icon="phone"
            placeholder="Моб. номер"
            value={values.phone}
            onChangeText={handleChange("phone")}
            error={errors.phone}
            touched={true}
          />
        </Box>

        <Box marginBottom="s" width="100%">
          <TextInput
            icon="lock"
            placeholder="Пароль"
            value={values.password}
            onChangeText={handleChange("password")}
            error={errors.password}
            touched={true}
            secureTextEntry
          />
        </Box>

        <Text variant="body" textAlign="left" marginBottom="s">
          Процент за работу
        </Text>

        <Box marginBottom="m" width="100%">
          <TextInput
            icon="percent"
            placeholder="Процент"
            value={values.percent}
            onChangeText={handleChange("percent")}
            error={errors.percent}
            touched={true}
          />
        </Box>

        <ConfirmSlide onConfirm={() => alert("Изменения сохранены")} />
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Edit;
