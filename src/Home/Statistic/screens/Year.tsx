import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StatisticNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { Graph, GraphsSlider, Point, Subheader } from "../components";

// * temp
import { graphDataYear, graphClientsPerYearData } from "../../utils/temp";
import moment from "moment";
const graphsData = [graphDataYear, graphClientsPerYearData];

const Year = ({ navigation }: StatisticNavigationProps<"Year">) => {
  const insets = useSafeAreaInsets();

  const points = graphDataYear.map(({ value, ...ext }, index) => {
    const cValue = `Прибыль: ${value} руб., Клиентов: ${graphClientsPerYearData[index].value}`;

    return { value: cValue, ...ext };
  });

  return (
    <>
      <StatusBar style="light" />

      <Box flex={1} backgroundColor="white" paddingTop="m">
        <GraphsSlider
          data={graphsData}
          subheaderButtonTitle="Вернуться"
          interval={moment(graphsData[0][0].date).format("YYYY")}
          datesPresentetionVariant="year"
          onPressSubheaderButton={() => navigation.goBack()}
        />

        <FlatList
          data={points}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item: { value, color, date } }) =>
            value ? (
              <Point
                key={date.toString()}
                mode="year"
                onPress={() => navigation.navigate("Month")}
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

export default Year;
