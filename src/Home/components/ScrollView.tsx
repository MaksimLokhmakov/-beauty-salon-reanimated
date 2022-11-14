import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  SharedValue,
} from "react-native-reanimated";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import { forwardRef, MutableRefObject, ReactNode, useRef } from "react";
import { HEADER_WITH_SEARCH_HEIGHT } from "./HeaderWithSearch";
import { SEARCH_HEIGHT } from "./SearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedScrollView = Animated.createAnimatedComponent(GHScrollView);

interface ScrollViewProps {
  children: ReactNode;
  y: SharedValue<number>;
}

const ScrollView = forwardRef<GHScrollView, ScrollViewProps>(
  ({ children, y }, ref) => {
    const lastOffsetY = useRef(0);
    const insets = useSafeAreaInsets();

    const onScroll = useAnimatedScrollHandler((e) => {
      const offsetY = e.contentOffset.y;

      lastOffsetY.current = offsetY;
      y.value = offsetY;
    });

    const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = e.nativeEvent.contentOffset.y;
      if (offsetY > SEARCH_HEIGHT) return;

      const y = offsetY > SEARCH_HEIGHT / 2 ? SEARCH_HEIGHT : 0;

      (ref as MutableRefObject<GHScrollView>).current?.scrollTo({
        y,
        animated: true,
      });
    };

    return (
      <AnimatedScrollView
        ref={ref}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: HEADER_WITH_SEARCH_HEIGHT + insets.top,
        }}
        {...{ onScroll, onScrollEndDrag }}
      >
        {children}
      </AnimatedScrollView>
    );
  }
);

export default ScrollView;
