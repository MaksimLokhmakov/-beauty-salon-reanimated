import { StatusBar } from "expo-status-bar";
import { useSharedValue } from "react-native-reanimated";
import { Box } from "../../../components";
import { HeaderWithSearch, ScrollView, SearchResult } from "../../components";
import { HomeNavigationProps } from "../../../components/Navigation";
import { useCallback, useRef, useState } from "react";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import Section from "./Section";
import { getDuration } from "../../utils/getDuration";

// ? temp
import { AppointmentType } from "../../utils/temp";
import { appointments as cAppointments } from "../../utils/temp";

const Appointments = ({ navigation }: HomeNavigationProps<"Appointments">) => {
  const [appointments, setAppointments] = useState(cAppointments);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const scroll = useRef<GHScrollView>(null);
  const searchResultScrollRef = useRef<GHScrollView>(null);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  // ? ----- temp
  const handleDeleteAppointment = useCallback((id: string) => {
    console.log(1);

    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
  }, []);

  const groupByDate = (appointments: AppointmentType[]) => {
    let result = [];

    const groupByCategory = appointments.reduce((group, product) => {
      const { start } = product;
      const month = start.toLocaleString("ru", { month: "long" });
      const day = start.getDate().toString();
      const category = `${day}, ${month}`;

      // @ts-ignore: Unreachable code error
      group[category] = group[category] ?? [];
      // @ts-ignore: Unreachable code error
      group[category].push(product);
      return group;
    }, {});

    for (let key in groupByCategory) {
      // @ts-ignore: Unreachable code error
      result.push({ title: key, appointments: groupByCategory[key] });
    }

    return result;
  };

  // ?  temp ----
  const searchData = search
    ? appointments.filter(
        ({ client, master, start, finish }) =>
          client.toLowerCase().includes(search.toLowerCase()) ||
          master.toLowerCase().includes(search.toLowerCase()) ||
          start.getDate().toString().includes(search) ||
          getDuration(start, finish).includes(search)
      )
    : [];

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <HeaderWithSearch
          title="Приемы"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "plus", onPress: () => true }}
          value={search}
          onChangeText={(e) => setSearch(e)}
          onClear={() => setSearch("")}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setTimeout(() => setSearchFocus(false), 200)}
          {...{ x, y }}
        />

        <Box flex={1} zIndex={!searchFocus ? 1 : 0}>
          <ScrollView ref={scroll} {...{ y }}>
            {groupByDate(appointments).map(({ appointments, title }) => (
              <Section
                key={title}
                simultaneousHandlers={scroll}
                onDeleteAppointment={handleDeleteAppointment}
                {...{ title, appointments }}
              />
            ))}
          </ScrollView>
        </Box>

        <SearchResult
          ref={searchResultScrollRef}
          data={appointments}
          searchValue={search}
          {...{ x }}
        >
          {groupByDate(searchData).map(({ appointments, title }) => {
            return (
              <Section
                key={title}
                simultaneousHandlers={scroll}
                onDeleteAppointment={handleDeleteAppointment}
                {...{ title, appointments }}
              />
            );
          })}
        </SearchResult>
      </Box>
    </>
  );
};

export default Appointments;
