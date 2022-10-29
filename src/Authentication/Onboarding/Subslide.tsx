import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components";
import React from "react";

const { width, height } = Dimensions.get("window");

interface SubslideProps {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Начать" : "Далее"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;

const styles = StyleSheet.create({
  conteiner: {
    width,
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    marginBottom: height * 0.005,
    color: "#0C0D34",
  },
  description: {
    fontFamily: "SFProText-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    opacity: 0.7,
    marginBottom: height * 0.045,
  },
});
