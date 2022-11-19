import { memo } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface PointProps {
  value: number;
  date: Date;
  color: string;
  mode: "month" | "year";
}

const Point = ({ value, date, color, mode }: PointProps) => {
  const formatDate = date.toLocaleString(
    "ru",
    mode === "month"
      ? {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      : { month: "long" }
  );

  return (
    <RectButton>
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
            {`Прибыль: ${value} руб.`}
          </Text>
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
