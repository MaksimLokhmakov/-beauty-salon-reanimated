import { FlatList, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StatisticNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { GraphsSlider, Point } from "../components";

// * temp
import { graphDataYear, graphClientsPerYearData } from "../../utils/temp";
import moment from "moment";
const graphsData = [graphDataYear, graphClientsPerYearData];

const Year = ({ navigation }: StatisticNavigationProps<"Year">) => {
  const insets = useSafeAreaInsets();

  const points = graphDataYear.map(({ value, ...ext }, index) => {
    return {
      income: value,
      clients: graphClientsPerYearData[index].value,
      ...ext,
    };
  });

  return (
    <>
      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />

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
          renderItem={({ item: { income, clients, color, date } }) =>
            clients ? (
              <Point
                key={date.toString()}
                mode="year"
                onPress={() => navigation.navigate("Month", {})}
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

export default Year;
