import { Box, Text } from "../../../../components";
import Button from "./Button";

export interface SubheaderProps {
  interval: string;
  totalProfit?: number;
  buttonTitle?: string;
  onPressButton?: () => void;
  mode?: "rubles" | "clients";
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
      <Box justifyContent="center">
        <Text variant="body">
          {interval}
          {mode && `${mode === "rubles" ? ",прибыль" : ",клиенты"}`}
        </Text>

        {totalProfit && (
          <Text variant="title2" textAlign="left" fontSize={22}>
            {totalProfit}
            {mode === "rubles" ? " руб." : " кл."}
          </Text>
        )}
      </Box>

      {buttonTitle && (
        <Button title={buttonTitle} onPress={onPressButton as () => void} />
      )}
    </Box>
  );
};

export default Subheader;
