import { Box, Text } from "../../components";
import { getAvatarColor } from "../utils/getAvatarColor";

export interface AvatarProps {
  name: string;
  size: number;
}

const Avatar = ({ name, size }: AvatarProps) => {
  const { backgroundColor, color } = getAvatarColor(name);
  const firstLetters =
    name.split(" ")[0].slice(0, 1) + name.split(" ")[1].slice(0, 1);

  return (
    <Box
      width={size}
      height={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2, backgroundColor }}
    >
      <Text variant="title1" style={{ color, fontSize: size / 3 }}>
        {firstLetters}
      </Text>
    </Box>
  );
};

export default Avatar;
