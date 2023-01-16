import { ScrollView, TextInput as RNTextInput, Dimensions } from "react-native";
import {
  Box,
  Text,
  Conteiner,
  TextInput,
  RoundIconButton,
} from "../../../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MastersNavigationProps } from "../../../../components/Navigation";
import { phoneInputMask } from "../../../../helpers/consts";
import { useRef, useState } from "react";
import Slide from "./Slide";
import { Checkbox } from "../../../../components/Form";

const { width } = Dimensions.get("window");

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
  passwordConfirmation: Yup.string()
    .min(7, "Too Short!")
    .max(17, "Too Long!")
    .equals([Yup.ref("password")], "Password don`t match")
    .required("Required"),
});

const AddMaster = ({ navigation }: MastersNavigationProps<"AddMaster">) => {
  const scroll = useRef<ScrollView>(null);
  const surname = useRef<RNTextInput>(null);
  const phone = useRef<RNTextInput>(null);
  const percent = useRef<RNTextInput>(null);
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        phone: "",
        percent: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: AddMasterSchema,
      onSubmit: () => {
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
    <Conteiner leftBottomBorder pattern={2} {...{ footer }}>
      <Text paddingTop="l" variant="title2">
        Новый мастер
      </Text>

      <ScrollView ref={scroll} scrollEnabled={false} horizontal>
        <Box flexDirection="row">
          <Slide
            title="Введите имя и фамилию мастера"
            buttonLabel="Далее"
            errors={
              !errors.name && !errors.surname && touched.name && touched.surname
            }
            onSubmit={() => {
              scroll.current?.scrollTo({ x: width });
              phone.current?.focus();
            }}
          >
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
                blurOnSubmit={false}
                onSubmitEditing={() => surname.current?.focus()}
                autoFocus
              />
            </Box>

            <TextInput
              ref={surname}
              icon="users"
              placeholder="Введите фамилию"
              value={values.surname}
              onChangeText={handleChange("surname")}
              onBlur={handleBlur("surname")}
              error={errors.surname}
              touched={touched.surname}
              returnKeyLabel="next"
              returnKeyType="next"
            />
          </Slide>

          <Slide
            title="Введите моб. номер мастера"
            buttonLabel="Далее"
            errors={!errors.phone && touched.phone}
            onSubmit={() => {
              scroll.current?.scrollTo({ x: width * 2 });
              percent.current?.focus();
            }}
          >
            <TextInput
              ref={phone}
              icon="phone"
              mask={phoneInputMask}
              value={values.phone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              error={errors.phone}
              touched={touched.phone}
              returnKeyLabel="next"
              returnKeyType="next"
            />
          </Slide>

          <Slide
            title="Введите процент мастера за работу"
            buttonLabel="Далее"
            errors={!errors.percent && touched.percent}
            onSubmit={() => {
              scroll.current?.scrollTo({ x: width * 3 });
              password.current?.focus();
            }}
          >
            <TextInput
              ref={percent}
              icon="percent"
              placeholder="Введите процент"
              value={values.percent}
              onChangeText={handleChange("percent")}
              onBlur={handleBlur("percent")}
              error={errors.percent}
              touched={touched.percent}
              returnKeyLabel="next"
              returnKeyType="next"
            />
          </Slide>

          <Slide
            title="Придумайте пароль мастера для входа в аккаунт"
            buttonLabel="Добавить мастера"
            errors={
              !errors.password &&
              !errors.passwordConfirmation &&
              touched.password &&
              touched.passwordConfirmation
            }
            onSubmit={handleSubmit}
          >
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
                returnKeyLabel="next"
                returnKeyType="next"
                autoComplete="password"
                autoCapitalize="none"
                blurOnSubmit={false}
                secureTextEntry={!passwordVisible}
                onSubmitEditing={() => passwordConfirmation.current?.focus()}
              />
            </Box>

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
              secureTextEntry={!passwordVisible}
            />

            <Box marginTop="m">
              <Checkbox
                label="Показывать пароль"
                checked={passwordVisible}
                onChange={() => setPasswordVisible((prev) => !prev)}
              />
            </Box>
          </Slide>
        </Box>
      </ScrollView>
    </Conteiner>
  );
};

export default AddMaster;
