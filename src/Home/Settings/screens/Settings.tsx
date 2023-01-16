import { useCallback, useState } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, largeDevice } from "../../../components";
import { Header, InfoConteiner } from "../../components";
import { SettingsNavigationProps } from "../../../components/Navigation";
import { Option } from "../components";

import { patternOption } from "../../utils/temp";

const { width, height } = Dimensions.get("window");
const BOTTOM_SHEET_HEIGHT = width / (largeDevice ? 2 : 2.5);
const CONTENT_HEIGHT = height - BOTTOM_SHEET_HEIGHT;

const Settings = ({
  navigation,
}: SettingsNavigationProps<"GeneralSettings">) => {
  const [currentPatternId, setCurrentPatternId] = useState(2);

  const handleChangePattern = useCallback((selectedPatternId: number) => {
    setCurrentPatternId(selectedPatternId);
  }, []);

  return (
    <Box backgroundColor="white" {...{ height }}>
      <Header
        title="Настройки"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
      />

      <InfoConteiner title="Выбор паттерна картинок">
        {patternOption.map(({ id, pattern }, index) => (
          <TouchableWithoutFeedback
            key={id}
            onPress={() => handleChangePattern(id)}
          >
            <Box marginBottom={index !== patternOption.length ? "s" : 0}>
              <Option
                label={
                  <Image
                    source={pattern}
                    style={{ width: 30, height: 30, borderRadius: 30 }}
                  />
                }
                onPress={() => handleChangePattern(id)}
                active={currentPatternId === id}
              />
            </Box>
          </TouchableWithoutFeedback>
        ))}
      </InfoConteiner>

      <Box position="absolute">
        <Box
          top={CONTENT_HEIGHT - BOTTOM_SHEET_HEIGHT}
          position="absolute"
          overflow="hidden"
        >
          <Image
            source={patternOption[currentPatternId].pattern}
            style={styles.bottomFillPattern}
          />
          <Box
            backgroundColor="white"
            width={width}
            height={BOTTOM_SHEET_HEIGHT}
            borderBottomRightRadius="xl"
          />
        </Box>

        <Box top={CONTENT_HEIGHT}>
          <Image
            source={patternOption[currentPatternId].pattern}
            style={styles.bottomFillPattern}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  bottomFillPattern: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: width / 2,
    borderTopLeftRadius: 75,
  },
});

export default Settings;
