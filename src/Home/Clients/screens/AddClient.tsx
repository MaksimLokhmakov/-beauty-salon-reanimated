import { useFormik } from "formik";
import { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import {
  Box,
  Button,
  Conteiner,
  RoundIconButton,
  Text,
  TextInput,
} from "../../../components";
import { phoneInputMask } from "../../../Authentication/utils/consts";
import { ClientsNavigationProps } from "../../../components/Navigation";
import { getAllErrors } from "../../../helpers";
import { useDispatch } from "react-redux";
import { addClient } from "../../../features/clientsSlice";
import * as Yup from "yup";

const AddMasterSchema = Yup.object().shape({
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

const AddClient = ({ navigation }: ClientsNavigationProps<"AddClient">) => {
  const dispatch = useDispatch();

  const surname = useRef<RNTextInput>(null);
  const phone = useRef<RNTextInput>(null);

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        phone: "",
      },
      validationSchema: AddMasterSchema,
      onSubmit: ({ name, surname, phone }) => {
        dispatch(
          addClient({
            id: Math.random().toString(),
            name: name + " " + surname,
            phone,
          })
        );
        navigation.goBack();
      },
    });

  const footer = (
    <Box padding={"xl"}>
      <RoundIconButton
        backgroundColor="white"
        color="black"
        name="x"
        size={60}
        onPress={() => navigation.goBack()}
      />
    </Box>
  );

  return (
    <Conteiner pattern={1} leftBottomBorder {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" marginBottom="m">
          Новый клиент
        </Text>

        <Box marginBottom="s">
          <TextInput
            icon="user"
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            error={errors.name}
            touched={touched.name}
            returnKeyLabel="next"
            returnKeyType="next"
            placeholder="Введите имя клиента"
            onSubmitEditing={() => surname.current?.focus()}
          />
        </Box>

        <Box marginBottom="s">
          <TextInput
            ref={surname}
            icon="users"
            value={values.surname}
            onChangeText={handleChange("surname")}
            onBlur={handleBlur("surname")}
            error={errors.surname}
            touched={touched.surname}
            returnKeyLabel="next"
            returnKeyType="next"
            placeholder="Введите фамилию клиента"
            onSubmitEditing={() => phone.current?.focus()}
          />
        </Box>

        <TextInput
          ref={phone}
          icon="phone"
          value={values.phone}
          onChangeText={handleChange("phone")}
          onBlur={handleBlur("phone")}
          error={errors.phone}
          touched={touched.phone}
          placeholder="Введите моб. номер клиента"
          returnKeyLabel="go"
          returnKeyType="go"
          mask={phoneInputMask}
        />

        <Box marginTop="l" alignItems="center">
          <Button
            label="Добавить"
            onPress={handleSubmit}
            variant={
              !getAllErrors(errors, touched, touched.phone)
                ? "default"
                : "primary"
            }
          />
        </Box>
      </Box>
    </Conteiner>
  );
};

export default AddClient;
