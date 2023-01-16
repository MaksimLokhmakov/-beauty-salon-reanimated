import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { memo } from "react";
import { Box, Text } from "../../components";
import Avatar from "./Avatar";
import Swipe from "./Swipe";
import { Feather as Icon } from "@expo/vector-icons";

const INFO_BOX_WIDTH = Dimensions.get("window").width;
const INFO_BOX_AVATAR_SIZE = 50;
const INFO_BOX_HEIGHT = 60;

export interface InfoBoxProps {
  id?: string;
  title: string;
  subtitle: string;
  width?: number;
  padding?: "m" | "s";
  separator?: boolean;
  label?: string;
  simultaneousHandlers?: React.Ref<unknown> | React.Ref<unknown>[];
  swipeable?: boolean;
  onDelete?: () => void;
  onPress?: (phone: string) => void;
}

const InfoBox = ({
  id = "1",
  title,
  subtitle,
  label,
  simultaneousHandlers,
  onDelete,
  onPress,
  padding = "m",
  separator = true,
  swipeable = true,
  width = INFO_BOX_WIDTH,
}: InfoBoxProps) => {
  const right = (
    <Box
      position="absolute"
      justifyContent="center"
      alignItems="center"
      right={0}
      width={INFO_BOX_HEIGHT}
      height={INFO_BOX_HEIGHT}
    >
      <Icon name="trash-2" color="red" size={INFO_BOX_HEIGHT / 2.5} />
    </Box>
  );

  return (
    <Swipe
      cHeight={INFO_BOX_HEIGHT}
      cWidth={width}
      onDelete={onDelete as () => void}
      {...{ right, simultaneousHandlers, swipeable }}
    >
      <TouchableOpacity onPress={() => onPress && onPress(id)}>
        <Box
          height={INFO_BOX_HEIGHT}
          padding={padding}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="white"
          borderBottomColor="grey"
          borderBottomWidth={separator ? 1 : 0}
        >
          <Box flexDirection="row">
            <Box marginRight="m">
              <Avatar name={title} size={INFO_BOX_AVATAR_SIZE} />
            </Box>

            <Box justifyContent="flex-start">
              <Text
                variant="button"
                textAlign="left"
                fontSize={16}
                color="secondary"
              >
                {title}
              </Text>
              <Text variant="body" textAlign="left" fontSize={14}>
                {subtitle}
              </Text>
            </Box>
          </Box>

          <Text variant="body" fontSize={14}>
            {label}
          </Text>
        </Box>
      </TouchableOpacity>
    </Swipe>
  );
};

export default memo(InfoBox);
