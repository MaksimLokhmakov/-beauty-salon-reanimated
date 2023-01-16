import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StatisticNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { Header } from "../../components";
import { GraphsSlider, Point } from "../components";
import moment from "moment";
import "moment/locale/ru";

// * temp
import {
  graphDataMonths,
  graphClientsPerDayDataMonths,
} from "../../utils/temp";

const graphsData = [graphDataMonths, graphClientsPerDayDataMonths];

const Current = ({ navigation }: StatisticNavigationProps<"Current">) => {
  const insets = useSafeAreaInsets();

  const points = graphDataMonths.map(({ value, ...ext }, index) => {
    return {
      income: value,
      clients: graphClientsPerDayDataMonths[index].value,
      ...ext,
    };
  });

  const interval = moment(graphDataMonths[0].date).format("MMMM");

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <Header
          title="статистика"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        />

        <GraphsSlider
          data={graphsData}
          datesPresentetionVariant="month"
          subheaderButtonTitle="Полный отчет"
          onPressSubheaderButton={() => navigation.navigate("Full")}
          {...{ interval }}
        />

        <FlatList
          data={points}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item: { income, clients, color, date } }) =>
            clients ? (
              <Point
                key={date.toString()}
                mode="month"
                onPress={() => navigation.navigate("Day", { date })}
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

export default Current;
