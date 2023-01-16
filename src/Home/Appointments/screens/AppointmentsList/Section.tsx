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
  const headerHeight = useSharedValue(30);

  const headerStyle = useAnimatedStyle(() => {
    return { height: headerHeight.value };
  });

  return (
    <Box>
      <AnimatedBox style={headerStyle}>
        <SectionHeader {...{ title }} />
      </AnimatedBox>

      {appointments.map(({ client, master, start, finish, id }, index) => {
        const duration = getDuration(start, finish);
        const date = capitalizeFirstLetter(
          moment(start).format("dd, DD MMM YYYY")
        );

        const handleDeleteAppointment = () => {
          if (appointments.length === 1) {
            headerHeight.value = withTiming(0);
            setTimeout(() => onDeleteAppointment(id), 200);
          } else {
            onDeleteAppointment(id);
          }
        };

        return (
          <InfoBox
            key={id}
            title={client}
            subtitle={"Мастер: " + master}
            label={duration}
            onPress={() =>
              navigation.navigate("AppointmentInfo", {
                appointment: {
                  id: master + client,
                  master,
                  date,
                  duration,
                  client,
                  price: "80",
                },
              })
            }
            onDelete={handleDeleteAppointment}
            {...{ simultaneousHandlers }}
          />
        );
      })}
    </Box>
  );
};

export default Section;
