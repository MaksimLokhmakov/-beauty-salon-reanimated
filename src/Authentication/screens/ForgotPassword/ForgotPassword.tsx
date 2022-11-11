import { ScrollView, Dimensions, TextInput as RNTextInput } from "react-native";
import { useRef } from "react";
import { Conteiner, Box } from "../../../components";
import { useFormik } from "formik";
import { Footer } from "../../components";
import { AuthNavigationProps } from "../../../components/Navigation";
import { VerificationSlide, PhoneSlide, PasswordChangeSlide } from "./slides";
import * as Yup from "yup";

const { width } = Dimensions.get("window");

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
}: AuthNavigationProps<"ForgotPassword">) => {
  const scroll = useRef<ScrollView>(null);
  const message = useRef<RNTextInput>(null);
  const password = useRef<RNTextInput>(null);
  const slidesConteinerWidth = width * 3;

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        phone: "",
        password: "",
        message: "",
        passwordConfirmation: "",
      },
      validationSchema: ForgotPasswordSchema,
      onSubmit: ({ phone, password, message }) =>
        alert(`Phone: ${phone}, Password: ${password}, Remember: ${message}`),
    });

  const footer = (
    <Footer
      onPress={() => {}}
      title="Не получилось?"
      action="Попробуйте другой вариант"
    />
  );

  const phoneSlideSubmit = () => {
    scroll.current?.scrollTo({ x: width });
    message.current?.focus();
  };

  const verificationSlideSubmit = () => {
    scroll.current?.scrollTo({ x: width * 2 });
    password.current?.focus();
  };

  const passwordChangeSubmit = () => {
    handleSubmit();
    navigation.navigate("PasswordChanged");
  };

  return (
    <Conteiner pattern={1} {...{ footer }}>
      <ScrollView
        ref={scroll}
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEnabled={false}
        horizontal
      >
        <Box width={slidesConteinerWidth} flexDirection="row">
          <PhoneSlide
            value={values.phone}
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            error={errors.phone}
            touched={touched.phone}
            onSubmit={phoneSlideSubmit}
          />

          <VerificationSlide
            ref={message}
            value={values.message}
            onChangeText={handleChange("message")}
            onBlur={handleBlur("message")}
            error={errors.message}
            touched={touched.message}
            onSubmit={verificationSlideSubmit}
            onPressConfirmationCodeField={() => message.current?.focus()}
          />

          <PasswordChangeSlide
            ref={password}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            cValue={values.passwordConfirmation}
            cOnChange={handleChange("passwordConfirmation")}
            cOnBlur={handleBlur("passwordConfirmation")}
            cError={errors.passwordConfirmation}
            cTouched={touched.passwordConfirmation}
            onSubmit={passwordChangeSubmit}
          />
        </Box>
      </ScrollView>
    </Conteiner>
  );
};

export default ForgotPassword;
