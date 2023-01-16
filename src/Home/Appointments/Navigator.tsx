import { createStackNavigator } from "@react-navigation/stack";
import { AppointmentsRoutes } from "../../components/Navigation";
import { AppointmentsList, AddAppointment, AppointmentInfo } from "./screens";

const Appointments = createStackNavigator<AppointmentsRoutes>();

const StatisticNavigator = () => {
  return (
    <Appointments.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Appointments.Screen
        name="AppointmentsList"
        component={AppointmentsList}
      />
      <Appointments.Screen name="AppointmentInfo" component={AppointmentInfo} />

      <Appointments.Group screenOptions={{ presentation: "modal" }}>
        <Appointments.Screen name="AddAppointment" component={AddAppointment} />
      </Appointments.Group>
    </Appointments.Navigator>
  );
};

export default StatisticNavigator;
