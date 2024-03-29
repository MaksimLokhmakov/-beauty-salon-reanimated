import * as React from "react";
import "react-native-gesture-handler";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import AuthenticationNavigator, {
  assets as authenticationAssets,
} from "./src/Authentication";
import HomeNavigator, { assets as homeAssets } from "./src/Home";
import { assets as conteinerAssets } from "./src/components";
import { LoadAssets, theme } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { AppRoutes } from "./src/components/Navigation";

import { Provider } from "react-redux";
import { store } from "./src/store/Store";

const assets = [...authenticationAssets, ...conteinerAssets, ...homeAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{ fonts, assets }}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppStack.Navigator
              screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
              }}
            >
              <AppStack.Screen
                name="Authentication"
                component={AuthenticationNavigator}
              />
              <AppStack.Screen name="Home" component={HomeNavigator} />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </LoadAssets>
      </ThemeProvider>
    </Provider>
  );
}
