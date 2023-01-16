import { createStackNavigator } from "@react-navigation/stack";
import { SettingsRoutes } from "../../components/Navigation";
import { Settings } from "./screens";
import { TransitionPresets } from "@react-navigation/stack";

const Masters = createStackNavigator<SettingsRoutes>();

const MastersNavigator = () => {
  return (
    <Masters.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Masters.Screen name="GeneralSettings" component={Settings} />
    </Masters.Navigator>
  );
};

export default MastersNavigator;
