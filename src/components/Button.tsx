import { StyleSheet, Dimensions } from "react-native";
import { Text, Theme } from "./Theme";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { useMemo } from "react";

const { width } = Dimensions.get("window");

type Variant = "default" | "primary" | "transparent";

interface ButtonProps {
  label: string;
  variant: Variant;
  onPress: () => void;
}

const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 25,
    height: 50,
    width: width / 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const { colors } = theme;

  const variantColors = useMemo(() => {
    const variants = {
      primary: { backgroundColor: colors.primary, color: colors.white },
      transparent: { backgroundColor: "transparent", color: colors.title },
      default: { backgroundColor: colors.grey, color: colors.title },
    };

    return variants[variant] || undefined;
  }, [variant]);
  const { backgroundColor, color } = variantColors;

  return (
    <RectButton
      style={[styles.conteiner, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
