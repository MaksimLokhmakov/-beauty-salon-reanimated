import { Box, Text } from "../../components";
import { useState, useEffect, ReactNode, Children } from "react";
import { TouchableWithoutFeedback, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const AnimateBox = Animated.createAnimatedComponent(Box);

type Tab = {
  id: string;
  title: string;
};

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
}

const Tabs = ({ tabs, children }: TabsProps) => {
  const [index, setIndex] = useState(0);

  const translateX = useSharedValue(0);
  useEffect(() => {
    translateX.value = withTiming((index * width) / 2);
  }, [index]);

  const lineStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { scaleX: 0.8 }],
  }));

  const tabContentConteinerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -translateX.value * 2 }],
  }));

  return (
    <Box style={{ marginTop: 130 }}>
      <Box flexDirection="row">
        {tabs.map((tab, index) => (
          <TouchableWithoutFeedback
            key={tab.id}
            onPress={() => setIndex(index)}
          >
            <Box flex={1} padding="s">
              <Text variant="title2" fontSize={16}>
                {tab.title}
              </Text>
            </Box>
          </TouchableWithoutFeedback>
        ))}

        <AnimateBox
          position="absolute"
          bottom={0}
          width={width / 2}
          height={3}
          borderRadius="xl"
          backgroundColor="primary"
          style={lineStyle}
        />
      </Box>

      <AnimateBox
        width={width * tabs.length}
        flexDirection="row"
        style={tabContentConteinerStyle}
      >
        {Children.map(children, (child, index) => (
          <Box key={index} flex={1} {...{ width }}>
            {child}
          </Box>
        ))}
      </AnimateBox>
    </Box>
  );
};

export default Tabs;
