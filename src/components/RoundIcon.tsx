import { Box } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";

export interface RoundIconProps {
  size: number;
  iconSize?: number;
  name: "check" | "lock" | "x";
  color: string;
  backgroundColor: string;
}

const RoundIcon = ({
  name,
  color,
  backgroundColor,
  size,
  iconSize,
}: RoundIconProps) => {
  return (
    <Box
      width={size}
      height={size}
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor, borderRadius: size / 2 }}
    >
      <Icon size={iconSize ? iconSize : size * 0.75} {...{ name, color }} />
    </Box>
  );
};

export default RoundIcon;
