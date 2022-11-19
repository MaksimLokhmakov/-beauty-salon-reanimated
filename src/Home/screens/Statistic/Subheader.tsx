import { Box, Text } from "../../../components";

import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SUBHEADER_BUTTON_HEIGHT = 35;

interface SubheaderProps {
  interval: string;
  totalProfit: number;
  buttonTitle: string;
  onPressButton: () => void;
}

const Subheader = ({
  interval,
  totalProfit,
  buttonTitle,
  onPressButton,
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
        <Text variant="body">{`${interval}, полная прибыль`}</Text>
        <Text variant="title2" textAlign="left" fontSize={22}>
          {totalProfit} руб.
        </Text>
      </Box>

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
