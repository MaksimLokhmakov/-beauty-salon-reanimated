import { StatusBar } from "expo-status-bar";
import { useSharedValue } from "react-native-reanimated";
import { Box } from "../../../../components";
import {
  HeaderWithSearch,
  ScrollView,
  SearchResult,
} from "../../../components";
import { AppointmentsNavigationProps } from "../../../../components/Navigation";
import { useCallback, useRef, useState } from "react";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import Section from "./Section";
import { useSelector, useDispatch } from "react-redux";
import { removeAppointment } from "../../../../features/appointmentsSlice";
import type { RootState } from "../../../../store/Store";
import { groupByDate, search } from "../../helpers";

// ? temp
import { appointments as cAppointments } from "../../../utils/temp";

const AppointmentsList = ({
  navigation,
}: AppointmentsNavigationProps<"AppointmentsList">) => {
  const appointments = useSelector(
    (state: RootState) => state.appointmentsStore.appointments
  );
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const scroll = useRef<GHScrollView>(null);
  const searchResultScrollRef = useRef<GHScrollView>(null);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const handleDeleteAppointment = useCallback((id: string) => {
    dispatch(removeAppointment(id));
  }, []);

  const searchData = search(appointments, searchValue);

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <HeaderWithSearch
          title="Приемы"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{
            icon: "plus",
            onPress: () => navigation.navigate("AddAppointment"),
          }}
          value={searchValue}
          onChangeText={(e) => setSearchValue(e)}
          onClear={() => setSearchValue("")}
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
          searchValue={searchValue}
          {...{ x }}
        >
          {groupByDate(searchData).map(({ appointments, title }) => {
            return (
              <Section
                key={title}
                simultaneousHandlers={scroll}
                onDeleteAppointment={handleDeleteAppointment}
                {...{ title, appointments, navigation }}
              />
            );
          })}
        </SearchResult>
      </Box>
    </>
  );
};

export default AppointmentsList;
