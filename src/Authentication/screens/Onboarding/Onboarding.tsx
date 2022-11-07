import { useRef } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import { Routes, StackNavigationProps } from "../../../components/Navigation";
import { useTheme, Box, largeDevice } from "../../../components";

const { width, height: windowHeight } = Dimensions.get("window");

const AnimatedBox = Animated.createAnimatedComponent(Box);

const slides = [
  {
    title: "Комфорт",
    subtitle: "Приятное использование",
    description:
      "Мощный пользовательский опыт! Качественные анимации и лучший дизайн!",
    color: "#BFEAF5",
    picture: require("../../../../assets/images/2.png"),
  },
  {
    title: "Контроль",
    subtitle: "Полная отчетность",
    description: "Собрание полной отчетности! Контролируй работу всего салона",
    color: "#BEECC4",
    picture: require("../../../../assets/images/1.png"),
  },
  {
    title: "Качество",
    subtitle: "Надежное хранение информации",
    description: "Безопасность информации и никаких багов!",
    color: "#FFE4D9",
    picture: require("../../../../assets/images/2.png"),
  },
  {
    title: "Журнал",
    subtitle: "Списки клиентов, мастеров и приемов",
    description: "Только у нас удобные журналы клиентов, мастеров и приемов!",
    color: "#ffd9f2",
    picture: require("../../../../assets/images/1.png"),
  },
  {
    title: "Время",
    subtitle: "Полное расписание салона",
    description: "Удобное редактирование и просмотр расписания каждого мастера",
    color: "#ebd9ff",
    picture: require("../../../../assets/images/2.png"),
  },
  {
    title: "Скорость",
    subtitle: "Быстрое использование",
    description:
      "Лучшая скорость на постсовеском пространстве! Вы сделали правильный выбор",
    color: "#FFDDDD",
    picture: require("../../../../assets/images/1.png"),
  },
];

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
  },
  footer: {
    flex: 1,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  slidesConteiner: {
    flex: 1,
    flexDirection: "row",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export const assets = [slides[0].picture, slides[1].picture];

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  const theme = useTheme();
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    x.value = e.contentOffset.x;
  });
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      slides.map((_, index) => index * width),
      slides.map((slide) => slide.color)
    );

    return {
      backgroundColor,
    };
  });

  const animatedSubslideStyle = useAnimatedStyle(() => {
    const transform = [{ translateX: x.value * -1 }];

    return {
      transform,
    };
  });

  return (
    <View style={styles.conteiner}>
      <AnimatedBox
        borderBottomRightRadius="xl"
        style={[styles.slider, animatedStyle]}
      >
        {slides.map(({ picture }, index) => {
          const right = index % 2 === 0;

          const transformPicture = [
            { translateX: (right ? 1 : -1) * width * 0.2 },
            { translateY: windowHeight * 0.12 },
            { scale: 0.5 },
          ];

          const animatedStyle = useAnimatedStyle(() => {
            const opacity = interpolate(
              x.value,
              [(index - 0.5) * width, index * width, (index + 0.5) * width],
              [0, 1, 0],
              Extrapolate.CLAMP
            );

            return { opacity };
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.underlay,
                { transform: transformPicture },
                animatedStyle,
              ]}
            >
              <Image
                source={picture}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  width: width - theme.borderRadii.xl,
                  height: (width - theme.borderRadii.xl) * 1.2,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          scrollEventThrottle={16}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </AnimatedBox>

      <Box flex={1}>
        <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]} />

        <Box flex={1} borderTopLeftRadius="xl" backgroundColor="white">
          <Box
            height={
              largeDevice ? theme.borderRadii.xl : theme.borderRadii.xl / 1.5
            }
            style={styles.pagination}
          >
            {slides.map((_, index) => (
              <Dot key={index} {...{ index, x }} />
            ))}
          </Box>

          <Animated.View
            style={[animatedSubslideStyle, styles.slidesConteiner]}
          >
            {slides.map(({ description, subtitle }, index) => {
              const last = index === slides.length - 1;

              const onPress = () => {
                if (last) {
                  navigation.navigate("Welcome");
                  return;
                }

                scroll.current?.scrollTo({
                  x: width * (index + 1),
                  animated: true,
                });
              };

              return (
                <Subslide
                  key={index}
                  onPress={onPress}
                  {...{ description, subtitle, last }}
                />
              );
            })}
          </Animated.View>
        </Box>
      </Box>
    </View>
  );
};

export default Onboarding;
