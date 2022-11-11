import { Avatar, AvatarProps } from "../components";
import { Text, Box } from "../../components/Theme";

interface DrawerAvatarProps extends AvatarProps {
  phone: string;
}

const DrawerAvatar = ({ name, phone, ...props }: DrawerAvatarProps) => {
  return (
    <>
      <Avatar {...{ name }} {...props} />

      <Box marginTop="m">
        <Text variant="title2">{name}</Text>
        <Text variant="body">{phone}</Text>
      </Box>
    </>
  );
};

export default DrawerAvatar;
