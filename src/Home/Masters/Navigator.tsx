import { createStackNavigator } from "@react-navigation/stack";
import { MastersRoutes } from "../../components/Navigation";
import { MastersList, AddMaster, MasterInfo } from "./screens";
import { TransitionPresets } from "@react-navigation/stack";

const Masters = createStackNavigator<MastersRoutes>();

const MastersNavigator = () => {
  return (
    <Masters.Navigator
      initialRouteName="MastersList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Masters.Screen name="MastersList" component={MastersList} />
      <Masters.Screen
        name="MasterInfo"
        component={MasterInfo}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
      />

      <Masters.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Masters.Screen name="AddMaster" component={AddMaster} />
      </Masters.Group>
    </Masters.Navigator>
  );
};

export default MastersNavigator;
