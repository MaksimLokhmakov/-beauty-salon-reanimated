import { RectButton } from "react-native-gesture-handler";
import { Box, Text, RoundIcon, useTheme } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

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
  onPress?: () => void;
}

const Label = ({ icon, text, onPress }: LabelProps) => {
  const theme = useTheme();
  const handlePress = () => (onPress ? onPress() : null);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row">
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

        {onPress && (
          <Icon name="chevron-right" color={theme.colors.primary} size={24} />
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default Label;
