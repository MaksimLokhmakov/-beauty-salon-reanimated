import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MasterType } from "../Home/utils/temp";

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

export interface MastersNavigationProps<RouteName extends keyof MastersRoutes> {
  navigation: DrawerNavigationProp<MastersRoutes, RouteName>;
  route: RouteProp<MastersRoutes, RouteName>;
}

export interface ClientsNavigationProps<RouteName extends keyof ClientsRoutes> {
  navigation: DrawerNavigationProp<ClientsRoutes, RouteName>;
  route: RouteProp<ClientsRoutes, RouteName>;
}

export interface AppointmentsNavigationProps<
  RouteName extends keyof AppointmentsRoutes
> {
  navigation: DrawerNavigationProp<AppointmentsRoutes, RouteName>;
  route: RouteProp<AppointmentsRoutes, RouteName>;
}

export interface ScheduleNavigationProps<
  RouteName extends keyof ScheduleRoutes
> {
  navigation: DrawerNavigationProp<ScheduleRoutes, RouteName>;
  route: RouteProp<ScheduleRoutes, RouteName>;
}

export interface SettingsNavigationProps<
  RouteName extends keyof SettingsRoutes
> {
  navigation: DrawerNavigationProp<SettingsRoutes, RouteName>;
  route: RouteProp<SettingsRoutes, RouteName>;
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
  Year: {};
  Month: {};
  Day: { date: Date };
};

export type MastersRoutes = {
  MastersList: undefined;
  MasterInfo: {
    master: { id: string; name: string; phone: string; percent: number };
  };
  AddMaster: undefined;
};

export type SettingsRoutes = {
  GeneralSettings: undefined;
};

export type AppointmentsRoutes = {
  AppointmentsList: undefined;
  AppointmentInfo: {
    appointment: {
      id: string;
      client: string;
      master: string;
      date: string;
      duration: string;
      price: string;
    };
  };
  AddAppointment: undefined;
};

export type ClientsRoutes = {
  ClientsList: undefined;
  ClientInfo: {
    client: { id: string; name: string; phone: string };
  };
  AddClient: undefined;
};

export type ScheduleRoutes = {
  MonthSchedule: undefined;
  DaySchedule: {
    title: string;
    day: { master: MasterType; duration: string }[];
  };
};

export type HomeRoutes = {
  Masters: undefined;
  Clients: undefined;
  Appointments: undefined;
  Statistic: undefined;
  Settings: undefined;
  Schedule: undefined;
};

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};
