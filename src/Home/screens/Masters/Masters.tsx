import { StatusBar } from "expo-status-bar";
import { Box } from "../../../components";
import { HomeNavigationProps } from "../../../components/Navigation";
import { useRef, useState } from "react";
import { HeaderWithSearch, HEADER_WITH_SEARCH_HEIGHT } from "../../components";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CLOSE_BUTTON_WIDTH, SEARCH_HEIGHT } from "../../components/SearchBar";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

const Masters = ({ navigation }: HomeNavigationProps<"Masters">) => {
  const [search, setSearch] = useState("");
  const insets = useSafeAreaInsets();

  // ? логика компонента контейнера
  const scroll = useRef<Animated.ScrollView>(null);
  const lastOffsetY = useRef(0);

  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    const offsetY = e.contentOffset.y;

    lastOffsetY.current = offsetY;
    y.value = offsetY;
  });
  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY > SEARCH_HEIGHT) return;

    const y = offsetY > SEARCH_HEIGHT / 2 ? SEARCH_HEIGHT : 0;

    scroll.current?.scrollTo({
      y,
      animated: true,
    });
  };
  const onFocus = () => {
    x.value = withTiming(CLOSE_BUTTON_WIDTH);
  };
  const onBlur = () => {
    x.value = withTiming(0);
  };

  // ? temp
  const masters = new Array(20).fill(0);

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
          {...{ x, y, onFocus, onBlur }}
        />

        <Animated.ScrollView
          ref={scroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: HEADER_WITH_SEARCH_HEIGHT + insets.top,
          }}
          {...{ onScroll, onScrollEndDrag }}
        >
          {masters.map((_, index) => (
            <Box
              key={index}
              marginHorizontal="m"
              marginVertical="s"
              height={50}
              borderRadius="m"
              backgroundColor="primaryLight"
            />
          ))}
        </Animated.ScrollView>
      </Box>
    </>
  );
};

export default Masters;
