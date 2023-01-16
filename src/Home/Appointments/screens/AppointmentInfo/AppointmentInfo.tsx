import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

import { Box } from "../../../../components";
import { AppointmentsNavigationProps } from "../../../../components/Navigation";
import {
  Header,
  HeaderConteiner,
  AvatarWithLabel,
  Tabs,
} from "../../../components";

import Edit from "./Edit";
import Info from "./Info";

const { width } = Dimensions.get("window");
const AVATAR_SIZE = 100;

const tabs = [
  { id: "data", title: "Инфромация" },
  { id: "configuration", title: "Редактирование" },
];

const AppointmentInfo = ({
  navigation,
  route,
}: AppointmentsNavigationProps<"AppointmentInfo">) => {
  const {
    appointment: { id, client, master, date, duration, price },
  } = route.params;

  return (
    <>
      <StatusBar style="light" />

      <Box flex={1} backgroundColor="white">
        <HeaderConteiner>
          <Header
            left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
            title="Карта приема"
            dark
          />
        </HeaderConteiner>

        <Box flex={1}>
          <Box
            position="absolute"
            justifyContent="center"
            alignItems="center"
            width={width}
            top={-AVATAR_SIZE / 2}
          >
            <AvatarWithLabel
              {...{ name: client, phone: "Мастер: " + master }}
              size={AVATAR_SIZE}
            />
          </Box>

          <Tabs {...{ tabs }}>
            <Info {...{ master, client, price, date, duration }} />
            <Edit {...{ master, client, duration, price }} />
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default AppointmentInfo;
