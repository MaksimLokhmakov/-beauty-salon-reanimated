import { useMemo, useState } from "react";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { HomeNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { Header } from "../../components";
import Graph from "./Graph";
import Subheader from "./Subheader";
import Point from "./Point";

// * temp
import { graphDataMonths, graphDataYear } from "../../utils/temp";

const Statistic = ({ navigation }: HomeNavigationProps<"Statistic">) => {
  const [mode, setMode] = useState<"month" | "year">("year");
  const insets = useSafeAreaInsets();

  const currentGraphData = useMemo(() => {
    return mode === "year" ? graphDataYear : graphDataMonths;
  }, [mode]);

  const daysPoints = useMemo(() => {
    return currentGraphData.map(({ date, value, color }) => {
      const cDate =
        mode === "month"
          ? date.getDate()
          : date.toLocaleString("ru", { month: "short" });

      return { date: cDate, value, color };
    });
  }, [currentGraphData, mode]);

  const totalProfit = daysPoints.reduce((total, { value }) => {
    return total + value;
  }, 0);

  const interval = currentGraphData[0].date.toLocaleString(
    "ru",
    mode === "month" ? { month: "short" } : { year: "numeric" }
  );

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <Header
          title="статистика"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        />

        <Subheader
          buttonTitle={mode === "month" ? "За год" : "За месяц"}
          onPressButton={() => {
            setMode((prev) => (prev === "month" ? "year" : "month"));
          }}
          {...{ totalProfit, interval }}
        />

        <Graph data={daysPoints} />

        <FlatList
          data={currentGraphData}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item: { value, color, date } }) =>
            value ? (
              <Point key={date.toString()} {...{ value, date, color, mode }} />
            ) : null
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom }}
        />
      </Box>
    </>
  );
};

export default Statistic;
