import { Box, Text, useTheme } from "../../../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface InfoCardProps {
  // @ts-ignore: Unreachable code error
  icon: Icon;
  title: string;
}

const InfoCard = ({ icon, title }: InfoCardProps) => {
  const theme = useTheme();

  return (
    <Box
      backgroundColor="white"
      width={175}
      height={60}
      margin="s"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      borderRadius="m"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8.3,

        elevation: 13,
      }}
    >
      <Icon name={icon} size={22} color={theme.colors.primary} />

      <Box width={100} marginLeft="s">
        <Text variant="body" lineHeight={17} textAlign="left">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default InfoCard;
