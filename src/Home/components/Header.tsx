import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Box,
  Text,
  RoundIconName,
  RoundIconButton,
  useTheme,
} from "../../components";

export const HEADER_HEIGHT = 45;
const HEADER_ICON_SIZE = 30;

export interface HeaderProps {
  left?: {
    icon: RoundIconName;
    onPress: () => void;
  };
  right?: {
    icon: RoundIconName;
    onPress: () => void;
  };
  title?: string;
  dark?: boolean;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const color = dark ? theme.colors.white : theme.colors.secondary;
  const backgroundColor = dark ? theme.colors.secondary : theme.colors.white;

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
      paddingBottom="s"
      height={HEADER_HEIGHT}
      style={{ marginTop: insets.top || theme.spacing.m }}
    >
      <Box width={HEADER_ICON_SIZE}>
        {left && (
          <RoundIconButton
            size={HEADER_ICON_SIZE}
            name={left.icon}
            {...{ color, backgroundColor }}
            {...left}
          />
        )}
      </Box>

      <Box>
        {title && (
          <Text variant="header" style={{ color }}>
            {title.toUpperCase()}
          </Text>
        )}
      </Box>

      <Box width={HEADER_ICON_SIZE}>
        {right && (
          <RoundIconButton
            size={HEADER_ICON_SIZE}
            name={right.icon}
            {...{ color, backgroundColor }}
            {...right}
          />
        )}
      </Box>
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
