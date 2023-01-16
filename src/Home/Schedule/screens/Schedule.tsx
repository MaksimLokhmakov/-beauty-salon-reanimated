import { useRef, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { Platform } from "react-native";
import {
  ScrollView as GHScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import moment from "moment";

import { Box, theme } from "../../../components";
import {
  InfoConteiner,
  HeaderWithSearch,
  ScrollView,
  Label,
  SearchResult,
} from "../../components";
import { ScheduleNavigationProps } from "../../../components/Navigation";
import { normolizeMinutes, capitalizeFirstLetter } from "../../utils/helpers";

// ? temp
import { MasterType, masters, shadule } from "../../utils/temp";

const Schedule = ({ navigation }: ScheduleNavigationProps<"MonthSchedule">) => {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const scroll = useRef<GHScrollView>(null);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const daysShadule: { master: MasterType; duration: string }[][] = new Array(
    moment().daysInMonth()
  ).fill([
    { master: masters[0], duration: "09:00 - 19:00" },
    { master: masters[1], duration: "11:00 - 21:00" },
    { master: masters[2], duration: "10:00 - 20:00" },
  ]);
  const monthDays = shadule.map((_, index) =>
    capitalizeFirstLetter(
      moment(
        moment().format("YYYY-MM-") + normolizeMinutes(index + 1).toString()
      ).format("dd, DD MMMM")
    )
  );
  const dataWithTitles = shadule.map((day, index) => ({
    title: monthDays[index],
    day,
  }));

  // ?  temp ----
  const searchData = search
    ? dataWithTitles.filter(({ title }) => title.includes(search))
    : [];

  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <HeaderWithSearch
          title="Расписание"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          value={search}
          onChangeText={(e) => setSearch(e)}
          onClear={() => setSearch("")}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setTimeout(() => setSearchFocus(false), 200)}
          {...{ x, y }}
        />

        <Box flex={1} zIndex={!searchFocus ? 1 : 0} paddingTop="s">
          <ScrollView ref={scroll} {...{ y }}>
            {dataWithTitles.map(({ day, title }) => (
              <Touchable
                key={title}
                onPress={() =>
                  navigation.navigate("DaySchedule", { title, day })
                }
                style={{ paddingBottom: theme.spacing.m }}
              >
                <InfoConteiner {...{ title }}>
                  {day.map(({ master, duration }, index) => (
                    <Box
                      key={master + duration}
                      marginBottom={index !== day.length - 1 ? "s" : 0}
                    >
                      <Label
                        icon="clock"
                        text={`${master.name} | ${duration}`}
                      />
                    </Box>
                  ))}
                </InfoConteiner>
              </Touchable>
            ))}
          </ScrollView>
        </Box>

        <SearchResult data={dataWithTitles} searchValue={search} {...{ x }}>
          {searchData.map(({ day, title }) => (
            <InfoConteiner key={title} {...{ title, day }}>
              {day.map(({ master, duration }, index) => (
                <Box
                  key={master + duration}
                  marginBottom={index !== day.length - 1 ? "s" : 0}
                >
                  <Label icon="clock" text={`${master.name} | ${duration}`} />
                </Box>
              ))}
            </InfoConteiner>
          ))}
        </SearchResult>
      </Box>
    </>
  );
};

export default Schedule;
