import { StatisticRoutes } from "../../../components/Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { Current, Full, Year, Month } from "../screens";

const Statistic = createStackNavigator<StatisticRoutes>();

const StatisticNavigator = () => {
  return (
    <Statistic.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Statistic.Screen name="Current" component={Current} />

      <Statistic.Group screenOptions={{ presentation: "modal" }}>
        <Statistic.Screen name="Full" component={Full} />
        <Statistic.Screen name="Year" component={Year} />
        <Statistic.Screen name="Month" component={Month} />
      </Statistic.Group>
    </Statistic.Navigator>
  );
};

export default StatisticNavigator;
