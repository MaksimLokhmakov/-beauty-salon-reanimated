import { ReactNode } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
import { Switch } from "../../../components";

interface OptionProps {
  label: string | ReactNode;
  active: boolean;
  onPress: () => void;
}

const Option = ({ label = "Option", active = false, onPress }: OptionProps) => {
  if (typeof label === "string") {
    label = (
      <Text variant="body" textAlign="left" fontSize={18}>
        {label}
      </Text>
    );
  }

  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        paddingHorizontal="m"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
      >
        {label}

        <Switch {...{ active, onPress }} />
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Option;
