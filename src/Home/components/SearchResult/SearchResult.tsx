import { Box, useTheme } from "../../../components";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { forwardRef, ReactNode } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { CLOSE_BUTTON_WIDTH, SEARCH_HEIGHT } from "../SearchBar";
import SectionHeader from "../SectionHeader";
import Errors from "./Errors";

// ? temp
import { MasterType, ClientType, AppointmentType } from "../../utils/temp";

const { width, height } = Dimensions.get("window");
const AnimatedBox = Animated.createAnimatedComponent(Box);

interface SearchDataConteinerProps {
  searchValue: string;
  data:
    | MasterType[]
    | ClientType[]
    | AppointmentType[]
    | {
        title: string;
        day: {
          master: MasterType;
          duration: string;
        }[];
      }[]
    | null;
  x: SharedValue<number>;
  children: ReactNode;
}

const SearchResult = forwardRef<ScrollView, SearchDataConteinerProps>(
  ({ x, searchValue, data, children }, ref) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

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
        <SectionHeader title="Результаты" height={30} />

        {data?.length ? (
          <ScrollView
            ref={ref}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          >
            {children}
          </ScrollView>
        ) : (
          <Errors {...{ searchValue }} />
        )}
      </AnimatedBox>
    );
  }
);

export default SearchResult;
