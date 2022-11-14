import { Box, Text } from "../../../components";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface ErrorsProps {
  searchValue: string;
}

const Errors = ({ searchValue }: ErrorsProps) => {
  const title = searchValue ? "Не смогли найти" : "Нам нечего искать";
  const text = searchValue
    ? "Попробуйте повторить запрос, изменив формулировку"
    : "Начните вводить запрос в поле поиска";

  return (
    <Box
      flex={1}
      justifyContent="flex-start"
      alignItems="center"
      padding="xl"
      style={{ paddingVertical: width * 0.25 }}
    >
      <Text variant="title2" marginBottom="s">
        {title}
      </Text>

      {searchValue && (
        <Text variant="body" paddingHorizontal="l">
          "{searchValue}"
        </Text>
      )}

      <Text variant="body" fontSize={17}>
        {text}
      </Text>
    </Box>
  );
};

export default Errors;
