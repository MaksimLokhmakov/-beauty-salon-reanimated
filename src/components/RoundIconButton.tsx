import { TouchableOpacity } from "react-native-gesture-handler";
import RoundIcon, { RoundIconProps } from "./RoundIcon";

interface RoundIconButtonProps extends RoundIconProps {
  onPress: () => void;
}

const RoundIconButton = ({ onPress, ...props }: RoundIconButtonProps) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <RoundIcon {...props} />
    </TouchableOpacity>
  );
};

export default RoundIconButton;
