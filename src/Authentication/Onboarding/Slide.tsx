import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = height * 0.61;

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({ title, right }: SlideProps) => {
  const picture = right
    ? require("../../../assets/images/1.png")
    : require("../../../assets/images/2.png");

  const transformTitle = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: ((right ? 1 : -1) * width) / 2 + (right ? -1 : 1) * 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  const transformPicture = [
    { translateX: (right ? -1 : 1) * width * 0.2 },
    { translateY: height * 0.12 },
    { scale: right ? 0.5 : 0.45 },
  ];

  return (
    <View style={styles.conteiner}>
      <View style={[styles.underlay, { transform: transformPicture }]}>
        <Image source={picture} style={styles.picture} />
      </View>

      <View style={[styles.titleConteiner, { transform: transformTitle }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  conteiner: {
    width,
  },
  titleConteiner: {
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontFamily: "SFProText-Bold",
    fontSize: 70,
    lineHeight: 70,
    color: "white",
    textAlign: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    height: height > 800 ? height * 0.64 : height * 0.64,
    width: height > 800 ? width * 1.1 : width * 1,
  },
});
