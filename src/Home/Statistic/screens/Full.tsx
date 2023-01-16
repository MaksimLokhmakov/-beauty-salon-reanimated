import { FlatList, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StatisticNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { Point, GraphsSlider } from "../components";

// TODO: full year current month -- один компонент (props: mode , date)

// * temp
import { graphDataFull, graphClientsPerFullData } from "../../utils/temp";
const graphsData = [graphDataFull, graphClientsPerFullData];

const Full = ({ navigation }: StatisticNavigationProps<"Full">) => {
  const insets = useSafeAreaInsets();

  const points = graphDataFull.map(({ value, ...ext }, index) => {
    return {
      income: value,
      clients: graphClientsPerFullData[index].value,
      ...ext,
    };
  });

  return (
    <>
      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />

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
          renderItem={({ item: { income, clients, color, date } }) =>
            clients ? (
              <Point
                key={date.toString()}
                mode="full"
                onPress={() => navigation.navigate("Year", {})}
                {...{ income, clients, date, color }}
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
