import { StyleSheet, Image, Dimensions } from "react-native";
import { Box, Text } from "../../../components/Theme";
import { Button } from "../../../components";
import { Routes, StackNavigationProps } from "../../../components/Navigation";

const { height } = Dimensions.get("window");

const welcomePicture = { src: require("../../../../assets/images/3.png") };
export const assets = [welcomePicture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="grey">
        <Image
          source={welcomePicture.src}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: height * 0.4,
            height: height * 0.4,
            top: height * 0.05,
            left: height > 700 ? height * 0.04 : height * 0.08,
          }}
        />
      </Box>

      <Box flex={1} backgroundColor="white" borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />

        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding={height > 700 ? "xl" : "m"}
        >
          <Text variant="title2" marginBottom="s">
            Начать
          </Text>

          <Text variant="body">
            Войдите в свой аккаунт или зарегестрируйтесь и получите незабываемый
            опыт :)
          </Text>

          <Button
            variant="primary"
            label="Есть аккаунт? Войти"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Регестрация"
            onPress={() => navigation.navigate("SignUp")}
          />
          <Button
            variant="transparent"
            label="Забыли пароль?"
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
