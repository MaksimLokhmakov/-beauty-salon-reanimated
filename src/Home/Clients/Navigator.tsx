import { createStackNavigator } from "@react-navigation/stack";
import { ClientsRoutes } from "../../components/Navigation";
import { ClientsList, AddClient, ClientInfo } from "./screens";

const Clients = createStackNavigator<ClientsRoutes>();

const ClientsNavigator = () => {
  return (
    <Clients.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Clients.Screen name="ClientsList" component={ClientsList} />
      <Clients.Screen name="ClientInfo" component={ClientInfo} />

      <Clients.Group screenOptions={{ presentation: "modal" }}>
        <Clients.Screen name="AddClient" component={AddClient} />
      </Clients.Group>
    </Clients.Navigator>
  );
};

export default ClientsNavigator;
