import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

interface ButtonProps {
  label: string;
  variant: "default" | "primary";
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
  label: {
    fontSize: 16,
    fontFamily: "SFProText-Semibold",
    textAlign: "center",
  },
});

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2cb9b0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";

  return (
    <RectButton
      style={[styles.conteiner, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
