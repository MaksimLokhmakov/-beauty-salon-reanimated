import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export interface StatisticNavigationProps<
  RouteName extends keyof StatisticRoutes
> {
  navigation: DrawerNavigationProp<StatisticRoutes, RouteName>;
  route: RouteProp<StatisticRoutes, RouteName>;
}

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type StatisticRoutes = {
  Current: undefined;
  Full: undefined;
  Year: undefined;
  Month: undefined;
  Day: undefined;
};

export type HomeRoutes = {
  Masters: undefined;
  Clients: undefined;
  Appointments: undefined;
  Statistic: undefined;
  Options: undefined;
  Schedule: undefined;
};

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};
