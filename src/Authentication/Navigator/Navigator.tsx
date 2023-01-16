import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticationRoutes } from "../../components/Navigation";
import { TransitionPresets } from "@react-navigation/stack";
import {
  Onboarding,
  Welcome,
  Login,
  SignUp,
  ForgotPassword,
  PasswordChanged,
} from "../screens";

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
