import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StatisticNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { GraphsSlider, Point } from "../components";

// * temp
import {
  graphDataMonths,
  graphClientsPerDayDataMonths,
} from "../../utils/temp";
import moment from "moment";

const graphsData = [graphDataMonths, graphClientsPerDayDataMonths];

const Month = ({ navigation }: StatisticNavigationProps<"Month">) => {
  const insets = useSafeAreaInsets();

  const points = graphDataMonths.map(({ value, ...ext }, index) => {
    const cValue = `Прибыль: ${value} руб., Клиентов: ${graphClientsPerDayDataMonths[index].value}`;

    return { value: cValue, ...ext };
  });

  return (
    <>
      <StatusBar style="light" />

      <Box flex={1} backgroundColor="white" paddingTop="m">
        <GraphsSlider
          data={graphsData}
          subheaderButtonTitle="Вернуться"
          interval={moment(graphsData[0][0].date).format("MMMM")}
          datesPresentetionVariant="month"
          onPressSubheaderButton={() => navigation.goBack()}
        />

        <FlatList
          data={points}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item: { value, color, date } }) =>
            value ? (
              <Point
                key={date.toString()}
                mode="month"
                onPress={() => navigation.navigate("Day")}
                {...{ value, date, color }}
              />
            ) : null
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom }}
        />
      </Box>
    </>
  );
};

export default Month;
