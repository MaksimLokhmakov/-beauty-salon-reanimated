import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "../../components/Theme";
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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    padding: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    marginBottom: height * 0.005,
  },
  description: {
    marginBottom: height * 0.045,
  },
});
