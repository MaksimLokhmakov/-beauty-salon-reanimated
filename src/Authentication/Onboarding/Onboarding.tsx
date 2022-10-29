import { useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width, height } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    title: "Комфорт",
    subtitle: "Приятное использование",
    description:
      "Мощный пользовательский опыт! Качественные анимации и лучший дизайн!",
    color: "#BFEAF5",
  },
  {
    title: "Контроль",
    subtitle: "Полная отчетность",
    description: "Собрание полной отчетности! Контролируй работу всего салона",
    color: "#BEECC4",
  },
  {
    title: "Качество",
    subtitle: "Надежное хранение информации",
    description: "Безопасность информации и никаких багов!",
    color: "#FFE4D9",
  },
  {
    title: "Журнал",
    subtitle: "Списки клиентов, мастеров и приемов",
    description: "Только у нас удобные журналы клиентов, мастеров и приемов!",
    color: "#ffd9f2",
  },
  {
    title: "Время",
    subtitle: "Полное расписание салона",
    description: "Удобное редактирование и просмотр расписания каждого мастера",
    color: "#ebd9ff",
  },
  {
    title: "Скорость",
    subtitle: "Быстрое использование",
    description:
      "Лучшая скорость на постсовеском пространстве! Вы сделали правильный выбор",
    color: "#FFDDDD",
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
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  fotterContent: {
    borderTopLeftRadius: BORDER_RADIUS,
    flex: 1,
    backgroundColor: "white",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: height > 800 ? BORDER_RADIUS : BORDER_RADIUS / 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  slidesConteiner: {
    flex: 1,
    flexDirection: "row",
  },
});

const Onboarding = () => {
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
      <Animated.View style={[styles.slider, animatedStyle]}>
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
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]} />

        <View style={styles.fotterContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} {...{ index, x }} />
            ))}
          </View>

          <Animated.View
            style={[animatedSubslideStyle, styles.slidesConteiner]}
          >
            {slides.map(({ description, subtitle }, index) => (
              <Subslide
                key={index}
                last={index === slides.length - 1}
                onPress={() => {
                  if (!scroll.current) return;

                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }}
                {...{ description, subtitle }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
