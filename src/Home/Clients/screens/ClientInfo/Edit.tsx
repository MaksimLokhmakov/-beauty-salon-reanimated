import * as Yup from "yup";
import { useFormik } from "formik";

import { Box, Text, TextInput, theme } from "../../../../components";
import { ConfirmSlide } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";

const ChangeClientSchema = Yup.object().shape({
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
});

interface EditProps {
  name: string;
  phone: string;
}

const Edit = ({ name, phone }: EditProps) => {
  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: name.split(" ")[0],
      surname: name.split(" ")[1],
      phone: phone,
    },
    validationSchema: ChangeClientSchema,
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

        <Box marginBottom="m" width="100%">
          <TextInput
            icon="phone"
            placeholder="Моб. номер"
            value={values.phone}
            onChangeText={handleChange("phone")}
            error={errors.phone}
            touched={true}
          />
        </Box>

        <ConfirmSlide onConfirm={() => alert("Изменения сохранены")} />
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Edit;
