import { Dimensions, TouchableOpacity } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { memo } from "react";
import { Box, Text } from "../../../components";
import Avatar from "../Avatar";
import Swipe from "./Swipe";
import RightButton from "./RightButton";

export const INFO_BOX_WIDTH = Dimensions.get("window").width;
export const INFO_BOX_HEIGHT = 60;

export interface InfoBoxProps {
  title: string;
  subtitle: string;
  label?: string;
  simultaneousHandlers?: React.Ref<unknown> | React.Ref<unknown>[];
}

const InfoBox = ({
  title,
  subtitle,
  label,
  simultaneousHandlers,
}: InfoBoxProps) => {
  const translateX = useSharedValue(0);

  return (
    <Swipe
      right={<RightButton {...{ translateX }} />}
      {...{ translateX, simultaneousHandlers }}
    >
      <TouchableOpacity onPress={() => alert(1)}>
        <Box
          height={INFO_BOX_HEIGHT}
          padding="m"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="white"
        >
          <Box flexDirection="row">
            <Box marginRight="m">
              <Avatar name={title} size={50} />
            </Box>

            <Box justifyContent="flex-start">
              <Text
                variant="button"
                textAlign="left"
                fontSize={17}
                color="secondary"
              >
                {title}
              </Text>
              <Text variant="body" textAlign="left">
                {subtitle}
              </Text>
            </Box>
          </Box>

          <Text variant="body">{label}</Text>
        </Box>
      </TouchableOpacity>
    </Swipe>
  );
};

export default memo(InfoBox);
