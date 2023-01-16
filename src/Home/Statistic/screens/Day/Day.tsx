import { Platform, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import { CommonActions } from "@react-navigation/native";

import { Box, useTheme } from "../../../../components";
import { Subheader } from "../../components";
import { InfoConteiner, InfoBox, Label } from "../../../components";
import { StatisticNavigationProps } from "../../../../components/Navigation";
import { capitalizeFirstLetter } from "../../../utils/helpers";

// ! temp
import { graphClientsPerHour, graphIncomePerHour } from "../../../utils/temp";

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
              <InfoBox
                title="Максим Лохмаков"
                subtitle="+375 25 691-95-00"
                onPress={() => {}}
                width={infoBoxWidth}
                swipeable={false}
                label="18 %"
                padding="s"
              />
              <InfoBox
                title="Денис Никифоров"
                subtitle="+375 25 111-68-92"
                width={infoBoxWidth}
                swipeable={false}
                separator={false}
                label="16 %"
                padding="s"
              />
            </InfoConteiner>
          </Box>

          <Box marginBottom="s">
            <InfoConteiner title="Клиенты">
              <InfoBox
                title="Илья Соболев"
                subtitle="+375 25 622-91-77"
                width={infoBoxWidth}
                swipeable={false}
                padding="s"
              />
              <InfoBox
                title="Яна Кухарева"
                subtitle="+375 25 121-12-54"
                width={infoBoxWidth}
                swipeable={false}
                padding="s"
              />
              <InfoBox
                title="Елена Кувшин"
                subtitle="+375 25 525-22-94"
                width={infoBoxWidth}
                swipeable={false}
                separator={false}
                padding="s"
              />
            </InfoConteiner>
          </Box>

          <Box marginBottom="s">
            <InfoConteiner title="Приемы">
              <InfoBox
                title="Илья Соболев"
                subtitle="Мастер: Максим Лохмаков"
                label="09:00 - 11:00"
                width={infoBoxWidth}
                swipeable={false}
                padding="s"
              />
              <InfoBox
                title="Яна Кухарева"
                subtitle="Мастер: Денис Никифоров"
                label="11:00 - 15:00"
                width={infoBoxWidth}
                swipeable={false}
                padding="s"
              />
              <InfoBox
                title="Елена Кувшин"
                subtitle="Мастер: Максим Лохмаков"
                label="15:00 - 19:00"
                width={infoBoxWidth}
                swipeable={false}
                separator={false}
                padding="s"
              />
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
                <Label icon="pie-chart" text={`Процедуры 1`} />
              </Box>

              <Box marginBottom="s">
                <Label icon="speaker" text={`Спа: 2`} />
              </Box>

              <Box marginBottom="s">
                <Label icon="pocket" text={`Массаж 1`} />
              </Box>

              <Label icon="pen-tool" text={`Окрашивание: 2`} />
            </InfoConteiner>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
};

export default Day;
