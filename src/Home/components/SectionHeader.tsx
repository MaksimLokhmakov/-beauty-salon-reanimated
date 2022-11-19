import { Box, Text } from "../../components";

interface SectionHeaderProps {
  title: string;
  height?: number;
}

const SectionHeader = ({ title, height }: SectionHeaderProps) => {
  return (
    <Box
      height={height || "100%"}
      justifyContent="center"
      width="100%"
      backgroundColor="grey"
    >
      <Text paddingHorizontal="m" textAlign="left" variant="body">
        {title}
      </Text>
    </Box>
  );
};

export default SectionHeader;
