import { Text, Box } from "../../components/Theme";
import Avatar, { AvatarProps } from "./Avatar";

interface AvatarWithLabelProps extends AvatarProps {
  phone: string;
}

const AvatarWithLabel = ({ name, phone, ...props }: AvatarWithLabelProps) => {
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

export default AvatarWithLabel;
