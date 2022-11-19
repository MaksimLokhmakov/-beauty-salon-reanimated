import { useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HomeNavigationProps } from "../../../components/Navigation";
import { Box } from "../../../components";
import { Header } from "../../components";
import Graph from "./Graph";
import Subheader from "./Subheader";
import Point from "./Point";

// * temp
import { graphDataMonths, graphDataYear } from "../../utils/temp";

const Statistic = ({ navigation }: HomeNavigationProps<"Clients">) => {
  const [mode, setMode] = useState<"month" | "year">("year");
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
          right={{ icon: "plus", onPress: () => true }}
        />

        <Subheader
          buttonTitle={mode === "month" ? "За год" : "За месяц"}
          onPressButton={() => {
            setMode((prev) => (prev === "month" ? "year" : "month"));
          }}
          {...{ totalProfit, interval }}
        />
        <Graph data={daysPoints} />

        <ScrollView showsVerticalScrollIndicator={false}>
          {currentGraphData.map(({ value, date, color }) => {
            return value ? (
              <Point key={date.toString()} {...{ value, date, color, mode }} />
            ) : null;
          })}
        </ScrollView>
      </Box>
    </>
  );
};

export default Statistic;
