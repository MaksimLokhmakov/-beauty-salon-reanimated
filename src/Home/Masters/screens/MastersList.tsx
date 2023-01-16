import { StatusBar } from "expo-status-bar";
import { Box } from "../../../components";
import { MastersNavigationProps } from "../../../components/Navigation";
import { useRef, useState } from "react";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import {
  HeaderWithSearch,
  ScrollView,
  SearchResult,
  InfoBox,
} from "../../components";
import { useSharedValue } from "react-native-reanimated";

// ? temp
import { masters } from "../../utils/temp";

const MastersList = ({ navigation }: MastersNavigationProps<"MastersList">) => {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const scroll = useRef<GHScrollView>(null);
  const searchResultScrollRef = useRef<GHScrollView>(null);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const searchData = search
    ? masters.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <HeaderWithSearch
          title="мастера"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{
            icon: "plus",
            onPress: () => navigation.navigate("AddMaster"),
          }}
          value={search}
          onChangeText={(e) => setSearch(e)}
          onClear={() => setSearch("")}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => {
            setSearch("");
            setTimeout(() => setSearchFocus(false), 200);
          }}
          {...{ x, y }}
        />

        <Box flex={1} zIndex={!searchFocus ? 1 : 0}>
          <ScrollView ref={scroll} {...{ y }}>
            {masters.map(({ name, phone, percent }, index) => (
              <InfoBox
                key={index}
                title={name}
                subtitle={phone}
                label={(percent * 100).toFixed() + " %"}
                simultaneousHandlers={scroll}
                onPress={() =>
                  navigation.navigate("MasterInfo", {
                    master: { id: phone, name, phone, percent },
                  })
                }
                onDelete={() => {}}
              />
            ))}
          </ScrollView>
        </Box>

        <SearchResult
          ref={searchResultScrollRef}
          data={searchData}
          searchValue={search}
          {...{ x }}
        >
          {searchData.map(({ name, phone, percent }, index) => (
            <InfoBox
              key={index}
              title={name}
              subtitle={phone}
              label={(percent * 100).toFixed() + " %"}
              simultaneousHandlers={searchResultScrollRef}
              onPress={() =>
                navigation.navigate("MasterInfo", {
                  master: { id: phone, name, phone, percent },
                })
              }
              onDelete={() => {}}
            />
          ))}
        </SearchResult>
      </Box>
    </>
  );
};

export default MastersList;
