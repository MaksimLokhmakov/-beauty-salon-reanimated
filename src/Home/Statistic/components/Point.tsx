import { memo } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import moment from "moment";

interface PointProps {
  income: number;
  clients: number;
  date: Date;
  color: string;
  mode: "month" | "year" | "full";
  onPress: () => void;
}

const Point = ({ income, clients, date, color, mode, onPress }: PointProps) => {
  const formatDate = moment(date).format(
    mode === "full" ? "YYYY" : mode === "year" ? "MMMM" : "DD MMMM YYYY"
  );

  return (
    <RectButton {...{ onPress }}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingVertical="s"
        paddingHorizontal="m"
      >
        <Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              width={10}
              height={10}
              borderRadius="xl"
              marginRight="s"
              style={{
                backgroundColor: color,
              }}
            />
            <Text variant="title2" fontSize={17}>
              {formatDate}
            </Text>
          </Box>

          <Text variant="body" textAlign="left">
            {`Прибыль: ${income} руб., Клиенты: ${clients}`}
          </Text>

          <Text
            variant="body"
            textAlign="left"
          >{`Ср. прибыль с клиента: ${Math.round(income / clients)}`}</Text>
        </Box>

        <Icon
          name="chevron-right"
          size={24}
          backgroundColor="white"
          color="#212"
        />
      </Box>
    </RectButton>
  );
};

export default memo(Point);
