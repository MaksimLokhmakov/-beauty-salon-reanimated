import { Box, Text, useTheme } from "../../../components";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRef } from "react";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { MasterType } from "../../screens/Masters/Masters";
import { CLOSE_BUTTON_WIDTH, SEARCH_HEIGHT } from "../SearchBar";
import InfoBox from "../InfoBox";
import Errors from "./Errors";

const { width, height } = Dimensions.get("window");

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface SearchDataConteinerProps {
  searchValue: string;
  data: MasterType[] | null;
  x: SharedValue<number>;
}

const SearchResult = ({ x, data, searchValue }: SearchDataConteinerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const scroll = useRef<ScrollView>(null);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(x.value, [0, CLOSE_BUTTON_WIDTH], [1.1, 1]);
    const opacity = interpolate(x.value, [0, CLOSE_BUTTON_WIDTH], [0, 1]);

    return { transform: [{ scale }], opacity };
  });

  return (
    <AnimatedBox
      position="absolute"
      top={SEARCH_HEIGHT + insets.top + theme.spacing.s}
      left={0}
      right={0}
      bottom={0}
      backgroundColor="white"
      height={height - SEARCH_HEIGHT - insets.top + theme.spacing.s}
      {...{ width, style }}
    >
      <Box
        height={30}
        justifyContent="center"
        width="100%"
        backgroundColor="grey"
      >
        <Text paddingHorizontal="m" textAlign="left" variant="body">
          Результаты
        </Text>
      </Box>
      {data?.length ? (
        <ScrollView
          ref={scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          {data?.map(({ name, phone, percent }) => (
            <TouchableOpacity>
              <InfoBox
                title={name}
                subtitle={phone}
                label={(percent * 100).toFixed() + " %"}
                simultaneousHandlers={scroll}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Errors {...{ searchValue }} />
      )}
    </AnimatedBox>
  );
};

export default SearchResult;
