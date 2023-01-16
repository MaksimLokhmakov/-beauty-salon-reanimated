import { StatusBar } from "expo-status-bar";
import { Dimensions, Platform } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useCallback, useEffect, useRef, useState } from "react";
import MaskInput from "react-native-mask-input";

import { Box, Text, useTheme } from "../../../../components";
import {
  Header,
  InfoConteiner,
  Label,
  ConfirmSlide,
  Swipe,
} from "../../../components";
import BottomPiece from "./BottomPiece";
import { ScheduleNavigationProps } from "../../../../components/Navigation";

// ? temp
import { masters as defaultMasters, MasterType } from "../../../utils/temp";
import { durationInputMask } from "../../../../helpers/consts";

const { height, width } = Dimensions.get("window");
const ITEM_CONTEINER_HEIGHT = 40;

const Schedule = ({
  navigation,
  route,
}: ScheduleNavigationProps<"DaySchedule">) => {
  const { title, day } = route.params;
  const theme = useTheme();

  const [shadule, setShadule] = useState<
    { master: MasterType; duration: string }[]
  >(day ?? []);
  const [availableMaters, setAvailableMaters] = useState(defaultMasters);

  const mastersScroll = useRef<ScrollView>(null);
  const shaduleScroll = useRef<ScrollView>(null);

  const deleteButton = (
    <Box
      position="absolute"
      justifyContent="center"
      alignItems="center"
      right={0}
      width={ITEM_CONTEINER_HEIGHT}
      height={ITEM_CONTEINER_HEIGHT}
    >
      <Icon name="trash-2" color="red" size={20} />
    </Box>
  );

  const addButton = (
    <Box
      position="absolute"
      justifyContent="center"
      alignItems="center"
      right={0}
      width={ITEM_CONTEINER_HEIGHT}
      height={ITEM_CONTEINER_HEIGHT}
    >
      <Icon name="plus" color={theme.colors.primary} size={25} />
    </Box>
  );

  useEffect(() => {
    const masters = availableMaters.filter(
      ({ name }) => day && !day.find(({ master }) => master.name === name)
    );

    setAvailableMaters(masters.length ? masters : defaultMasters);
  }, []);

  const handleAddMasterToShadule = useCallback((master: MasterType) => {
    setAvailableMaters((prev) => [...prev, master]);

    setShadule((prev) =>
      prev.filter((item) => item.master.name !== master.name)
    );
  }, []);

  const handleDeleteMasterFromShadule = useCallback((master: MasterType) => {
    setAvailableMaters((prev) =>
      prev.filter((cMaster) => cMaster.name !== master.name)
    );

    setShadule((prev) => [...prev, { master: master, duration: "" }]);
  }, []);

  const handleChangeDuration = useCallback(
    (inputValue: string, master: string) => {
      setShadule((prev) =>
        prev.map((item) => {
          const duration =
            item.master.name === master ? inputValue : item.duration;

          return { ...item, duration };
        })
      );
    },
    []
  );

  return (
    <>
      <StatusBar style={Platform.OS === "android" ? "dark" : "light"} />

      <Box flex={1} backgroundColor="white">
        <Box zIndex={1}>
          <Header
            left={{
              icon: "arrow-left",
              onPress: () => navigation.navigate("MonthSchedule"),
            }}
            {...{ title }}
          />

          <Box marginBottom="s">
            <Text variant="body" textAlign="left" paddingLeft="l">
              Текущее расписание
            </Text>

            <Box maxHeight={height * 0.4}>
              <ScrollView
                scrollEnabled={false}
                ref={shaduleScroll}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingBottom: theme.spacing.m,
                  padding: theme.spacing.s,
                }}
                showsVerticalScrollIndicator={false}
              >
                {shadule.map(({ master, duration }) => (
                  <Swipe
                    key={master.phone}
                    swipeable={true}
                    cHeight={ITEM_CONTEINER_HEIGHT + theme.spacing.s}
                    cWidth={width * 0.9}
                    onDelete={() => handleAddMasterToShadule(master)}
                    right={deleteButton}
                    simultaneousHandlers={shaduleScroll}
                    inTransition
                  >
                    <Box marginBottom="s" height={ITEM_CONTEINER_HEIGHT}>
                      <InfoConteiner>
                        <Box flexDirection="row">
                          <Label icon="clock" text={master.name + " |  "} />
                          <MaskInput
                            style={{ flex: 0.7 }}
                            value={duration}
                            mask={durationInputMask}
                            autoFocus
                            onChangeText={(e) =>
                              handleChangeDuration(e, master.name)
                            }
                          />
                        </Box>
                      </InfoConteiner>
                    </Box>
                  </Swipe>
                ))}
              </ScrollView>
            </Box>
          </Box>

          <Text variant="body" textAlign="left" paddingLeft="l">
            Свободные мастера
          </Text>

          <Box maxHeight={height * 0.4} {...{ width }}>
            <ScrollView
              scrollEnabled={false}
              ref={mastersScroll}
              contentContainerStyle={{
                alignItems: "center",
                paddingBottom: theme.spacing.m,
                padding: theme.spacing.s,
              }}
              showsVerticalScrollIndicator={false}
            >
              {availableMaters.map((master) => (
                <Swipe
                  key={master.name}
                  swipeable={true}
                  cHeight={ITEM_CONTEINER_HEIGHT + theme.spacing.s}
                  cWidth={width * 0.9}
                  onDelete={() => handleDeleteMasterFromShadule(master)}
                  right={addButton}
                  simultaneousHandlers={mastersScroll}
                  inTransition
                >
                  <Box marginBottom="s" height={ITEM_CONTEINER_HEIGHT}>
                    <InfoConteiner>
                      <Label icon="user" text={master.name} />
                    </InfoConteiner>
                  </Box>
                </Swipe>
              ))}
            </ScrollView>
          </Box>
        </Box>

        <BottomPiece>
          <ConfirmSlide
            onConfirm={() => navigation.navigate("MonthSchedule")}
          />
        </BottomPiece>
      </Box>
    </>
  );
};

export default Schedule;
