import { Platform, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import { CommonActions } from "@react-navigation/native";

import { Box, useTheme } from "../../../../components";
import { Subheader } from "../../components";
import {
  InfoConteiner,
  InfoBox,
  Label,
  CBottomSheet,
} from "../../../components";
import { StatisticNavigationProps } from "../../../../components/Navigation";
import { capitalizeFirstLetter, getDuration } from "../../../utils/helpers";

// !temp
import { dayMasters, dayAppointments, dayClients } from "../../../utils/temp";

const { width } = Dimensions.get("window");

const Day = ({ navigation, route }: StatisticNavigationProps<"Day">) => {
  const { date } = route.params;
  const theme = useTheme();
  const infoBoxWidth = width - theme.spacing.m * 4;

  const today = moment({}).date() === moment(date).date() ? "Сегодня, " : "";
  const interval = capitalizeFirstLetter(
    `${today + moment(date).format("dd, DD MMM")}`
  );

  return (
    <>
      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />

      <Box flex={1} paddingVertical="m" backgroundColor="white">
        <Box marginBottom="s">
          <Subheader
            interval={interval}
            buttonTitle="Вернуться"
            onPressButton={() => navigation.goBack()}
          />
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Box marginBottom="s">
            <InfoConteiner title="Мастера">
              <Label
                icon="user"
                text={dayMasters.length.toString()}
                onPress={() => {}}
              />
              {/* {dayMasters.map((master, index) => (
                <InfoBox
                  title={master.name}
                  subtitle={master.phone}
                  onPress={() =>
                    navigation.dispatch(
                      CommonActions.navigate({
                        name: "MasterInfo",
                        params: { master },
                      })
                    )
                  }
                  width={infoBoxWidth}
                  swipeable={false}
                  label={`${master.percent * 100} %`}
                  padding="s"
                  separator={index !== dayMasters.length - 1}
                />
              ))} */}
            </InfoConteiner>
          </Box>

          <Box marginBottom="s">
            <InfoConteiner title="Клиенты">
              <Label
                icon="user"
                text={dayClients.length.toString()}
                onPress={() => {}}
              />
              {/* {dayClients.map((client, index) => (
                <InfoBox
                  title={client.name}
                  subtitle={client.phone}
                  width={infoBoxWidth}
                  swipeable={false}
                  padding="s"
                  onPress={() =>
                    navigation.dispatch(
                      CommonActions.navigate({
                        name: "ClientInfo",
                        params: { client },
                      })
                    )
                  }
                  separator={index !== dayClients.length - 1}
                />
              ))} */}
            </InfoConteiner>
          </Box>

          <Box marginBottom="s">
            <InfoConteiner title="Приемы">
              <Label
                icon="user"
                text={dayAppointments.length.toString()}
                onPress={() => {}}
              />
              {/* {dayAppointments.map((appointment, index) => (
                <InfoBox
                  title={appointment.client}
                  subtitle={`Мастер: ${appointment.master}`}
                  label={getDuration(appointment.start, appointment.finish)}
                  width={infoBoxWidth}
                  swipeable={false}
                  padding="s"
                  onPress={() =>
                    navigation.dispatch(
                      CommonActions.navigate({
                        name: "AppointmentInfo",
                        params: { appointment },
                      })
                    )
                  }
                  separator={index !== dayClients.length - 1}
                />
              ))} */}
            </InfoConteiner>
          </Box>

          <Box marginBottom="s">
            <InfoConteiner title="Прибыль">
              <Label icon="dollar-sign" text="345 р." />
            </InfoConteiner>
          </Box>

          <Box marginBottom="s">
            <InfoConteiner title="Доп. услуги">
              <Box marginBottom="s">
                <Label icon="pie-chart" text={`Процедуры: 1`} />
              </Box>

              <Box marginBottom="s">
                <Label icon="speaker" text={`Спа: 2`} />
              </Box>

              <Box marginBottom="s">
                <Label icon="pocket" text={`Массаж: 1`} />
              </Box>

              <Label icon="pen-tool" text={`Окрашивание: 2`} />
            </InfoConteiner>
          </Box>
        </ScrollView>
      </Box>

      <CBottomSheet>
        
      </CBottomSheet>
    </>
  );
};

export default Day;
