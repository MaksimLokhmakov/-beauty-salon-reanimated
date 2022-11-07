import {
  Conteiner,
  Box,
  Text,
  CloseButton,
  RoundIcon,
  useTheme,
  Button,
} from "../../../components";
import { Routes, StackNavigationProps } from "../../../components/Navigation";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";

const AnimatedBox = Animated.createAnimatedComponent(Box);

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  const theme = useTheme();
  const x = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      x.value = withSpring(1);
    }, 500);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: x.value,
      transform: [{ scale: x.value }],
    };
  });

  const footer = (
    <Box padding="xl">
      <CloseButton
        backgroundColor="white"
        color="black"
        name="x"
        size={60}
        onPress={() => navigation.navigate("Welcome")}
      />
    </Box>
  );

  return (
    <Conteiner pattern={1} leftBottomBorder {...{ footer }}>
      <Box padding="xl" justifyContent="center">
        <AnimatedBox alignItems="center" marginBottom="l" style={animatedStyle}>
          <RoundIcon
            size={100}
            name="check"
            backgroundColor={theme.colors.primaryLight}
            color={theme.colors.primary}
          />
        </AnimatedBox>

        <Text variant="body" paddingTop="s" paddingBottom="l">
          Ваш пароль успешно изменен, войдите в аккунт или вернитесь в меню
        </Text>

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Войти"
          />
        </Box>
      </Box>
    </Conteiner>
  );
};

export default PasswordChanged;
