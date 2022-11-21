import { Box, Text } from "../../../components";
import { StyleSheet, TouchableOpacity } from "react-native";

const SUBHEADER_BUTTON_HEIGHT = 35;

export interface SubheaderProps {
  interval: string;
  totalProfit: number;
  buttonTitle?: string;
  onPressButton?: () => void;
  mode: "rubles" | "clients";
}

const Subheader = ({
  interval,
  totalProfit,
  buttonTitle,
  onPressButton,
  mode,
}: SubheaderProps) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginTop="m"
      paddingHorizontal="m"
    >
      <Box>
        <Text variant="body">{`${interval}, ${
          mode === "rubles" ? "прибыль" : "клиенты"
        }`}</Text>
        <Text variant="title2" textAlign="left" fontSize={22}>
          {totalProfit} {mode === "rubles" ? "руб." : "кл."}
        </Text>
      </Box>

      {buttonTitle && (
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Box
            flex={1}
            paddingVertical="s"
            paddingHorizontal="m"
            backgroundColor="primaryLight"
            alignItems="center"
            justifyContent="center"
            style={{ borderRadius: SUBHEADER_BUTTON_HEIGHT / 2 }}
          >
            <Text variant="button" color="primary">
              {buttonTitle}
            </Text>
          </Box>
        </TouchableOpacity>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    height: SUBHEADER_BUTTON_HEIGHT,
    borderRadius: SUBHEADER_BUTTON_HEIGHT / 2,
  },
});

export default Subheader;
