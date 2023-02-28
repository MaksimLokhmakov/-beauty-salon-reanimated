import { StatusBar } from "expo-status-bar";
import { Box } from "../../../components";
import { useRef, useState } from "react";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import { ClientsNavigationProps } from "../../../components/Navigation";
import {
  HeaderWithSearch,
  ScrollView,
  SearchResult,
  InfoBox,
} from "../../components";
import { useSharedValue } from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";
import { removeClient } from "../../../features/clientsSlice";
import type { RootState } from "../../../store/Store";

const ClientsList = ({ navigation }: ClientsNavigationProps<"ClientsList">) => {
  const clients = useSelector((state: RootState) => state.clientsStore.clients);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const scroll = useRef<GHScrollView>(null);
  const searchResultScrollRef = useRef<GHScrollView>(null);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const searchData = search
    ? clients.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <StatusBar style="dark" />

      <Box flex={1} backgroundColor="white">
        <HeaderWithSearch
          title="клиенты"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{
            icon: "plus",
            onPress: () => navigation.navigate("AddClient"),
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

        <Box height="100%" zIndex={!searchFocus ? 1 : 0}>
          <ScrollView ref={scroll} {...{ y }}>
            {clients.map(({ id, name, phone }) => (
              <InfoBox
                key={id}
                title={name}
                subtitle={phone}
                simultaneousHandlers={scroll}
                onPress={() =>
                  navigation.navigate("ClientInfo", {
                    client: { id: phone, name, phone },
                  })
                }
                onDelete={() => dispatch(removeClient(id))}
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
          {searchData.map(({ id, name, phone }) => (
            <InfoBox
              key={id}
              title={name}
              subtitle={phone}
              simultaneousHandlers={searchResultScrollRef}
              onPress={() =>
                navigation.navigate("ClientInfo", {
                  client: { id: phone, name, phone },
                })
              }
              onDelete={() => dispatch(removeClient(id))}
            />
          ))}
        </SearchResult>
      </Box>
    </>
  );
};

export default ClientsList;
