import { Box, Text, RoundIcon, useTheme } from "../../components";

interface LabelProps {
  icon:
    | "calendar"
    | "clock"
    | "dollar-sign"
    | "phone"
    | "user"
    | "speaker"
    | "pocket"
    | "pen-tool"
    | "pie-chart";
  text: string;
}

const Label = ({ icon, text }: LabelProps) => {
  const theme = useTheme();

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="flex-start">
      <RoundIcon
        name={icon}
        size={25}
        iconSize={15}
        backgroundColor={theme.colors.primaryLight}
        color={theme.colors.primary}
      />

      <Text marginLeft="s" variant="body">
        {text}
      </Text>
    </Box>
  );
};

export default Label;
