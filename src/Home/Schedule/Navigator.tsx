import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ScheduleRoutes } from "../../components/Navigation";
import { Schedule as MonthSchedule, DaySchedule } from "./screens";

const Schedule = createStackNavigator<ScheduleRoutes>();

const ScheduleNavigator = () => {
  return (
    <Schedule.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Schedule.Screen name="MonthSchedule" component={MonthSchedule} />

      <Schedule.Group screenOptions={{ presentation: "modal" }}>
        <Schedule.Screen name="DaySchedule" component={DaySchedule} />
      </Schedule.Group>
    </Schedule.Navigator>
  );
};

export default ScheduleNavigator;
