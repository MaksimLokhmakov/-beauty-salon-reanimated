import { Dimensions, StyleSheet } from "react-native";
import { Text, Box } from "../../../components/Theme";
import { Button } from "../../../components";
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
    <Box
      padding="xl"
      justifyContent="center"
      alignItems="center"
      {...{ width }}
    >
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
    </Box>
  );
};

export default Subslide;

const styles = StyleSheet.create({
  subtitle: {
    marginBottom: height * 0.005,
  },
  description: {
    marginBottom: height * 0.045,
  },
});
