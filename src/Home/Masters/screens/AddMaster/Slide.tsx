import { Box, Button, Text } from "../../../../components";
import { Dimensions } from "react-native";
import { ReactNode } from "react";

const { width } = Dimensions.get("window");

interface SlideProps {
  title: string;
  buttonLabel: string;
  onSubmit: () => void;
  errors: string | boolean | undefined;
  children: ReactNode;
}

const Slide = ({
  title,
  buttonLabel,
  onSubmit,
  errors,
  children,
}: SlideProps) => {
  return (
    <Box
      paddingHorizontal="xl"
      marginTop="s"
      justifyContent="center"
      {...{ width }}
    >
      <Text variant="body" marginBottom="m">
        {title}
      </Text>

      {children}

      <Box alignItems="center" padding="l">
        <Button
          label={buttonLabel}
          onPress={!errors ? () => {} : onSubmit}
          variant={!errors ? "default" : "primary"}
        />
      </Box>
    </Box>
  );
};

export default Slide;
