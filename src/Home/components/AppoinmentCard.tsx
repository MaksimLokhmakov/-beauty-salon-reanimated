import { Dimensions, StyleSheet } from "react-native";
import { capitalizeFirstLetter, getDuration } from "../utils/helpers";
import moment from "moment";

import { Box } from "../../components";

import Avatar from "./Avatar";
import Label from "./Label";

// ? temp
import { AppointmentType } from "../utils/temp";
const CLIENT_PHONE = "+375 44 893-09-11";

const { width: wWidth } = Dimensions.get("window");
const APPOINTMENT_CARD_HEIGHT = 175;

interface AppoinmentCardProps {
  appointment: AppointmentType;
}

const AppoinmentCard = ({ appointment }: AppoinmentCardProps) => {
  const { client, start, finish, price } = appointment;

  const date = capitalizeFirstLetter(moment(finish).format("dd. DD MMM YYYY"));
  const duration = getDuration(start, finish);

  return (
    <Box
      width={wWidth * 0.9}
      height={APPOINTMENT_CARD_HEIGHT}
      borderRadius="l"
      backgroundColor="white"
      alignSelf="center"
      padding="m"
      marginTop="s"
      marginBottom="s"
      shadowColor="secondary"
      style={styles.conteinerShadow}
    >
      <Box flexDirection="row" marginBottom="s">
        <Box marginRight="m">
          <Avatar name={client} size={75} />
        </Box>

        <Box alignSelf="center">
          <Box marginBottom="s">
            <Label icon="user" text={client} />
          </Box>
          <Label icon="phone" text={CLIENT_PHONE} />
        </Box>
      </Box>

      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Box marginBottom="s">
            <Label icon="calendar" text={date} />
          </Box>
          <Label icon="clock" text={duration} />
        </Box>

        <Label icon="dollar-sign" text={price + " руб."} />
      </Box>
    </Box>
  );
};

export default AppoinmentCard;

const styles = StyleSheet.create({
  conteinerShadow: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 11.14,

    elevation: 17,
  },
});
