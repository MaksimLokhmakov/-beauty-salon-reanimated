import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Box } from "../../../../components";
import { AppointmentsRoutes } from "../../../../components/Navigation";
import { InfoBox, SectionHeader } from "../../../components";
import { capitalizeFirstLetter, getDuration } from "../../../utils/helpers";

// ? temp
import { AppointmentType } from "../../../utils/temp";

const SECTION_HEADER_HEIGHT = 30;
const AnimatedBox = Animated.createAnimatedComponent(Box);

interface SectionType {
  title: string;
  appointments: AppointmentType[];
  onDeleteAppointment: (id: string) => void;
  simultaneousHandlers?: React.Ref<unknown> | React.Ref<unknown>[];
}

const Section = ({
  title,
  appointments,
  simultaneousHandlers,
  onDeleteAppointment,
}: SectionType) => {
  const navigation =
    useNavigation<
      DrawerNavigationProp<AppointmentsRoutes, "AppointmentsList", undefined>
    >();
  const sectionHeaderHeight = useSharedValue(SECTION_HEADER_HEIGHT);

  const headerStyle = useAnimatedStyle(() => {
    return { height: sectionHeaderHeight.value };
  });

  return (
    <Box>
      <AnimatedBox style={headerStyle}>
        <SectionHeader {...{ title }} />
      </AnimatedBox>

      {appointments.map(({ client, master, start, finish, id }) => {
        const duration = getDuration(start, finish);
        const date = capitalizeFirstLetter(
          moment(start).format("dd, DD MMM YYYY")
        );

        const handleDeleteAppointment = () => {
          if (appointments.length === 1) {
            sectionHeaderHeight.value = withTiming(0);
            setTimeout(() => onDeleteAppointment(id), 200);
          } else {
            onDeleteAppointment(id);
          }
        };

        const handlePressAppointment = () => {
          navigation.navigate("AppointmentInfo", {
            appointment: {
              id: Math.random().toString(),
              master,
              date,
              duration,
              client,
              price: "80",
            },
          });
        };

        return (
          <InfoBox
            key={id}
            title={client}
            subtitle={"Мастер: " + master}
            label={duration}
            onPress={handlePressAppointment}
            onDelete={handleDeleteAppointment}
            {...{ simultaneousHandlers }}
          />
        );
      })}
    </Box>
  );
};

export default Section;
