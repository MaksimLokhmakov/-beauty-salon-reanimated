import { StatusBar } from "expo-status-bar";
import { Box } from "../../../components";
import { HomeNavigationProps } from "../../../components/Navigation";
import { useRef, useState } from "react";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import {
  HeaderWithSearch,
  ScrollView,
  SearchResult,
  InfoBox,
} from "../../components";
import { useSharedValue } from "react-native-reanimated";

export type MasterType = {
  name: string;
  phone: string;
  percent: number;
};

const Masters = ({ navigation }: HomeNavigationProps<"Masters">) => {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const scroll = useRef<GHScrollView>(null);
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  // ? temp
  const masters = [
    { name: "Максим Лохмаков", phone: "+375 25 231-92-01", percent: 0.18 },
    { name: "Денис Никифоров", phone: "+375 22 111-49-32", percent: 0.16 },
    { name: "Илья Соболев", phone: "+375 25 622-91-77", percent: 0.15 },
    { name: "Дима Иванович", phone: "+375 25 981-41-20", percent: 0.14 },
    { name: "Елена Кухарева", phone: "+375 25 121-12-54", percent: 0.12 },
    { name: "Алина Маслинекова", phone: "+375 25 826-90-10", percent: 0.19 },
    { name: "Екатерина Фламинго", phone: "+375 25 851-03-00", percent: 0.17 },
    { name: "Аня Петрович", phone: "+375 25 111-20-13", percent: 0.15 },
    { name: "Вита Прайонис", phone: "+375 25 391-20-39", percent: 0.14 },
    { name: "Соня Лук", phone: "+375 25 331-95-00", percent: 0.13 },
    { name: "Максим Поливода", phone: "+375 25 622-33-00", percent: 0.27 },
    { name: "Денис Вишнев", phone: "+375 25 621-95-33", percent: 0.25 },
    { name: "Илья Крутько", phone: "+375 25 987-12-34", percent: 0.3 },
    { name: "Дима Соловей", phone: "+375 25 693-95-22", percent: 0.09 },
    { name: "Елена Демочка", phone: "+375 25 691-94-20", percent: 0.12 },
    { name: "Алина Петрович", phone: "+375 25 694-14-56", percent: 0.15 },
    { name: "Аня Саванович", phone: "+375 25 623-76-22", percent: 0.1 },
    { name: "Виолетта Козырицкая", phone: "+375 25 615-00-00", percent: 0.2 },
    { name: "Соня Юла", phone: "+375 25 691-95-00", percent: 0.22 },
    { name: "Максим Лохмаков", phone: "+375 25 231-92-01", percent: 0.18 },
    { name: "Денис Никифоров", phone: "+375 22 111-49-32", percent: 0.16 },
    { name: "Илья Соболев", phone: "+375 25 622-91-77", percent: 0.15 },
    { name: "Дима Иванович", phone: "+375 25 981-41-20", percent: 0.14 },
    { name: "Елена Кухарева", phone: "+375 25 121-12-54", percent: 0.12 },
    { name: "Алина Маслинекова", phone: "+375 25 826-90-10", percent: 0.19 },
    { name: "Екатерина Фламинго", phone: "+375 25 851-03-00", percent: 0.17 },
    { name: "Аня Петрович", phone: "+375 25 111-20-13", percent: 0.15 },
    { name: "Вита Прайонис", phone: "+375 25 391-20-39", percent: 0.14 },
    { name: "Соня Лук", phone: "+375 25 331-95-00", percent: 0.13 },
    { name: "Максим Поливода", phone: "+375 25 622-33-00", percent: 0.27 },
    { name: "Денис Вишнев", phone: "+375 25 621-95-33", percent: 0.25 },
    { name: "Илья Крутько", phone: "+375 25 987-12-34", percent: 0.3 },
    { name: "Дима Соловей", phone: "+375 25 693-95-22", percent: 0.09 },
    { name: "Елена Демочка", phone: "+375 25 691-94-20", percent: 0.12 },
    { name: "Алина Петрович", phone: "+375 25 694-14-56", percent: 0.15 },
    { name: "Аня Саванович", phone: "+375 25 623-76-22", percent: 0.1 },
    { name: "Виолетта Козырицкая", phone: "+375 25 615-00-00", percent: 0.2 },
    { name: "Соня Юла", phone: "+375 25 691-95-00", percent: 0.22 },
    { name: "Максим Лохмаков", phone: "+375 25 231-92-01", percent: 0.18 },
    { name: "Денис Никифоров", phone: "+375 22 111-49-32", percent: 0.16 },
    { name: "Илья Соболев", phone: "+375 25 622-91-77", percent: 0.15 },
    { name: "Дима Иванович", phone: "+375 25 981-41-20", percent: 0.14 },
    { name: "Елена Кухарева", phone: "+375 25 121-12-54", percent: 0.12 },
    { name: "Алина Маслинекова", phone: "+375 25 826-90-10", percent: 0.19 },
    { name: "Екатерина Фламинго", phone: "+375 25 851-03-00", percent: 0.17 },
    { name: "Аня Петрович", phone: "+375 25 111-20-13", percent: 0.15 },
    { name: "Вита Прайонис", phone: "+375 25 391-20-39", percent: 0.14 },
    { name: "Соня Лук", phone: "+375 25 331-95-00", percent: 0.13 },
    { name: "Максим Поливода", phone: "+375 25 622-33-00", percent: 0.27 },
    { name: "Денис Вишнев", phone: "+375 25 621-95-33", percent: 0.25 },
    { name: "Илья Крутько", phone: "+375 25 987-12-34", percent: 0.3 },
    { name: "Дима Соловей", phone: "+375 25 693-95-22", percent: 0.09 },
    { name: "Елена Демочка", phone: "+375 25 691-94-20", percent: 0.12 },
    { name: "Алина Петрович", phone: "+375 25 694-14-56", percent: 0.15 },
    { name: "Аня Саванович", phone: "+375 25 623-76-22", percent: 0.1 },
    { name: "Виолетта Козырицкая", phone: "+375 25 615-00-00", percent: 0.2 },
    { name: "Соня Юла", phone: "+375 25 691-95-00", percent: 0.22 },
  ];

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
            {masters.map(({ name, phone, percent }, index) => (
              <InfoBox
                key={index}
                title={name}
                subtitle={phone}
                label={(percent * 100).toFixed() + " %"}
                simultaneousHandlers={scroll}
              />
            ))}
          </ScrollView>
        </Box>

        <SearchResult searchValue={search} data={searchData} {...{ x }} />
      </Box>
    </>
  );
};

export default Masters;
