import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StatisticNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { Point, GraphsSlider } from "../components";

// * temp
import { graphDataFull, graphClientsPerFullData } from "../../utils/temp";
const graphsData = [graphDataFull, graphClientsPerFullData];

const Full = ({ navigation }: StatisticNavigationProps<"Full">) => {
  const insets = useSafeAreaInsets();

  const points = graphDataFull.map(({ value, ...ext }, index) => {
    const cValue = `Прибыль: ${value} руб., Клиентов: ${graphClientsPerFullData[index].value}`;

    return { value: cValue, ...ext };
  });

  return (
    <>
      <StatusBar style="light" />

      <Box flex={1} backgroundColor="white" paddingTop="m">
        <GraphsSlider
          data={graphsData}
          datesPresentetionVariant="full"
          subheaderButtonTitle="Вернуться"
          interval="Все время"
          onPressSubheaderButton={() => navigation.goBack()}
        />

        <FlatList
          data={points}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item: { value, color, date } }) =>
            value ? (
              <Point
                key={date.toString()}
                mode="full"
                onPress={() => navigation.navigate("Year")}
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

export default Full;
