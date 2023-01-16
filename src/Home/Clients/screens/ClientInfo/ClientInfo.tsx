import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

import { Box } from "../../../../components";
import {
  Header,
  HeaderConteiner,
  AvatarWithLabel,
  Tabs,
} from "../../../components";
import { ClientsNavigationProps } from "../../../../components/Navigation";

import Edit from "./Edit";
import Info from "./Info";

const { width } = Dimensions.get("window");
const AVATAR_SIZE = 100;

const tabs = [
  { id: "data", title: "Инфромация" },
  { id: "configuration", title: "Редактирование" },
];

const ClientInfo = ({
  navigation,
  route,
}: ClientsNavigationProps<"ClientInfo">) => {
  const {
    client: { id, name, phone },
  } = route.params;

  return (
    <>
      <StatusBar style="light" />

      <Box flex={1} backgroundColor="white">
        <HeaderConteiner>
          <Header
            left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
            title="Карта клиента"
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
            <AvatarWithLabel {...{ name, phone }} size={AVATAR_SIZE} />
          </Box>

          <Tabs {...{ tabs }}>
            <Info />
            <Edit {...{ name, phone, password: "123456" }} />
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default ClientInfo;
