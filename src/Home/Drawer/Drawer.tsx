import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Box, useTheme, largeDevice } from "../../components";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";
import DrawerAvatar from "./DrawerAvatar";
import { Header } from "../components";
import theme from "../../components/Theme";
import React from "react";
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const shiftBottom = -1 * (largeDevice ? height / 6000 : height / 6000);
const DRAWER_AVATAR_SIZE = 100;

export const DRAWER_WIDTH = width * 0.8;
export const assets = [require("../../../assets/patterns/1.jpg")];

const items: DrawerItemProps[] = [
  {
    icon: "user",
    label: "Мастера",
    screen: "Masters",
    color: theme.colors.primary,
  },
  {
    icon: "users",
    label: "Клиенты",
    screen: "Clients",
    color: theme.colors.orange,
  },
  {
    icon: "book-open",
    label: "Приемы",
    screen: "Appointments",
    color: theme.colors.yellow,
  },
  {
    icon: "bar-chart-2",
    label: "Статистика",
    screen: "Statistic",
    color: theme.colors.danger,
  },
  {
    icon: "clock",
    label: "Расписание",
    screen: "Schedule",
    color: theme.colors.blue,
  },
  {
    icon: "settings",
    label: "Настройки",
    screen: "Options",
    color: theme.colors.pink,
  },
  {
    icon: "log-out",
    label: "Выход",
    color: theme.colors.black,
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
  },
];

const Drawer = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const asset = assets[0];

  return (
    <>
      <StatusBar style="light" />

      <Box flex={1} borderBottomRightRadius="xl" borderTopRightRadius="xl">
        <Box flex={0.2}>
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="secondary"
            borderBottomRightRadius="xl"
          >
            <Header
              title="Меню"
              left={{
                icon: "x",
                onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
              }}
              dark
            />
          </Box>
        </Box>

        <Box flex={0.8}>
          <Box flex={1} backgroundColor="secondary" />
          <Image
            source={asset}
            style={{
              ...styles.rightTopFillPattern,
              borderTopLeftRadius: theme.borderRadii.xl,
            }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="white"
            justifyContent="center"
            borderTopLeftRadius="xl"
            borderBottomRightRadius="xl"
            padding={"l"}
            paddingVertical="xl"
          >
            <Box
              position="absolute"
              justifyContent="center"
              alignItems="center"
              width={DRAWER_WIDTH}
              top={-DRAWER_AVATAR_SIZE / 2}
            >
              <DrawerAvatar
                name="Максим Лохмаков"
                phone="+375 25 691-95-00"
                size={DRAWER_AVATAR_SIZE}
              />
            </Box>

            <Box style={{ marginTop: largeDevice ? 0 : 100 }}>
              {items.map((item) => (
                <DrawerItem key={item.icon} {...item} />
              ))}
            </Box>
          </Box>
        </Box>

        <Box flex={largeDevice ? 0.2 : 0.1}>
          <Image
            source={asset}
            style={{
              ...styles.bottomFillPattern,
              borderTopLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  bottomFillPattern: {
    width: DRAWER_WIDTH,
    height: DRAWER_WIDTH,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  rightTopFillPattern: {
    width: DRAWER_WIDTH,
    height: DRAWER_WIDTH,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: shiftBottom,
  },
});

export default Drawer;
