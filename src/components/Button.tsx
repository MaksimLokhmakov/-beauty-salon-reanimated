import { StyleSheet, Dimensions } from "react-native";
import { Text, Theme } from "./Theme";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { ReactNode } from "react";

const { width } = Dimensions.get("window");

type Variant = "default" | "primary" | "transparent" | "primaryLight";

interface ButtonProps {
  label?: string;
  variant: Variant;
  onPress: () => void;
  children?: ReactNode;
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

const Button = ({ label, variant, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const { colors } = theme;

  const getvariantColors = (variant: Variant) => {
    const variants = {
      primary: { backgroundColor: colors.primary, color: colors.white },
      transparent: { backgroundColor: "transparent", color: colors.secondary },
      default: { backgroundColor: colors.grey, color: colors.secondary },
      primaryLight: {
        backgroundColor: colors.primaryLight,
        color: colors.primary,
      },
    };

    return variants[variant] || variants.default;
  };
  const { backgroundColor, color } = getvariantColors(variant);

  return (
    <RectButton
      style={[styles.conteiner, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
