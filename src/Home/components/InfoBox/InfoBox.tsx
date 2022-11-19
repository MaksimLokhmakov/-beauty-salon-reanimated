import { Dimensions, TouchableOpacity } from "react-native";
import { memo } from "react";
import { Box, Text } from "../../../components";
import Avatar from "../Avatar";
import Swipe from "./Swipe";
import { Feather as Icon } from "@expo/vector-icons";

export const INFO_BOX_WIDTH = Dimensions.get("window").width;
export const INFO_BOX_HEIGHT = 60;

export interface InfoBoxProps {
  title: string;
  subtitle: string;
  label?: string;
  simultaneousHandlers?: React.Ref<unknown> | React.Ref<unknown>[];
  onDelete: () => void;
}

const InfoBox = ({
  title,
  subtitle,
  label,
  simultaneousHandlers,
  onDelete,
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
    <Swipe {...{ right, simultaneousHandlers, onDelete }}>
      <TouchableOpacity onPress={() => alert(1)}>
        <Box
          height={INFO_BOX_HEIGHT}
          padding="m"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="white"
          borderBottomColor="grey"
          borderBottomWidth={1}
        >
          <Box flexDirection="row">
            <Box marginRight="m">
              <Avatar name={title} size={50} />
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
