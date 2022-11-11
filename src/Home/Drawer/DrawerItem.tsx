import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import {
  Box,
  Text,
  RoundIcon,
  RoundIconName,
  useTheme,
  largeDevice,
} from "../../components";
import { HomeRoutes } from "../../components/Navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const DRAWER_ICON_SIZE = largeDevice ? 36 : 30;

export interface DrawerItemProps {
  label: string;
  color: string;
  icon: RoundIconName;
  screen: keyof HomeRoutes;
}

const DrawerItem = ({ screen, label, color, icon }: DrawerItemProps) => {
  const navigation =
    useNavigation<DrawerNavigationProp<HomeRoutes, typeof screen>>();
  const theme = useTheme();
  const iconSize = largeDevice ? DRAWER_ICON_SIZE / 2 : DRAWER_ICON_SIZE / 2.5;

  return (
    <RectButton
      onPress={() => navigation.navigate(screen)}
      style={{
        borderRadius: theme.borderRadii.l,
      }}
    >
      <Box
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
        marginVertical="s"
        paddingHorizontal="s"
      >
        <RoundIcon
          size={DRAWER_ICON_SIZE}
          iconSize={iconSize}
          name={icon}
          backgroundColor={color}
          color={theme.colors.white}
        />
        <Text variant="button" paddingLeft={"m"} color="secondary">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
