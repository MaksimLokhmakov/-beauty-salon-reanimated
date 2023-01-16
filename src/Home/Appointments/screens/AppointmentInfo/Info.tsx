import { ScrollView } from "react-native";

import { Box, useTheme } from "../../../../components";

import { Label, InfoConteiner } from "../../../components";

// ? temp
const MASTER_PHONE = "+375 25 671-92-99";
const CLIENT_PHONE = "+375 44 377-12-35";

interface InfoProps {
  client: string;
  master: string;
  price: string;
  duration: string;
  date: string;
}

const Info = ({ duration, date, master, client, price }: InfoProps) => {
  const theme = useTheme();

  return (
    <Box flex={1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: theme.spacing.m,
          paddingBottom: theme.spacing.xxl,
        }}
      >
        <Box marginBottom="m">
          <InfoConteiner title="Мастер">
            <Box marginBottom="s">
              <Label icon="user" text={master} />
            </Box>

            <Label icon="phone" text={MASTER_PHONE} />
          </InfoConteiner>
        </Box>

        <Box marginBottom="m">
          <InfoConteiner title="Клиент">
            <Box marginBottom="s">
              <Label icon="user" text={client} />
            </Box>
            <Label icon="phone" text={CLIENT_PHONE} />
          </InfoConteiner>
        </Box>

        <Box marginBottom="m">
          <InfoConteiner title="Дата">
            <Label icon="calendar" text={date} />
          </InfoConteiner>
        </Box>

        <Box marginBottom="m">
          <InfoConteiner title="Время">
            <Label icon="clock" text={duration} />
          </InfoConteiner>
        </Box>

        <Box marginBottom="m">
          <InfoConteiner title="Прибыль">
            <Label icon="dollar-sign" text={price + " руб."} />
          </InfoConteiner>
        </Box>

        <Box marginBottom="m">
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
  );
};

export default Info;
