import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeRoutes } from "../components/Navigation";
import MastersNavigator from "./Masters";
import StatisticNavigator from "./Statistic";
import ClientsNavigator from "./Clients";
import AppointmentsNavigator from "./Appointments";
import ScheduleNavigator from "./Schedule";
import SettingsNavigator from "./Settings";
import { TransitionPresets } from "@react-navigation/stack";

const Drawer = createDrawerNavigator<HomeRoutes>();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Appointments"
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: DRAWER_WIDTH,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Drawer.Screen name="Masters" component={MastersNavigator} />
      <Drawer.Screen name="Clients" component={ClientsNavigator} />
      <Drawer.Screen name="Appointments" component={AppointmentsNavigator} />
      <Drawer.Screen name="Statistic" component={StatisticNavigator} />
      <Drawer.Screen name="Schedule" component={ScheduleNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
