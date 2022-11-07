import { RectButton } from "react-native-gesture-handler";
import RoundIcon, { RoundIconProps } from "./RoundIcon";

interface CloseButtonProps extends RoundIconProps {
  onPress: () => void;
}

const CloseButton = ({ onPress, ...props }: CloseButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundIcon {...props} />
    </RectButton>
  );
};

export default CloseButton;
