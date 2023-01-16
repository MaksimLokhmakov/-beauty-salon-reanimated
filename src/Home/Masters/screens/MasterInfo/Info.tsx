import { FlatList } from "react-native";
import { Box, useTheme } from "../../../../components";
import { AppoinmentCard } from "../../../components";

// ? temp
import { appointments } from "../../../utils/temp";

const Info = () => {
  const theme = useTheme();

  return (
    <Box paddingTop="s">
      <FlatList
        data={appointments}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <AppoinmentCard appointment={item} />}
        contentContainerStyle={{ paddingBottom: theme.spacing.xxl * 2 }}
        // ListHeaderComponent={() => (
        //   <Box padding="s" style={{}}>
        //     <Box>
        //       <Label icon="user" text={`Всего клиентов: ${7}`} />
        //     </Box>

        //     <Box alignSelf="flex-end">
        //       <Label icon="clock" text={`Часов за работой: ${17.3} ч.`} />
        //     </Box>

        //     <Box marginBottom="s">
        //       <Label icon="dollar-sign" text={`Полная прибыль: ${530} р.`} />
        //     </Box>

        //     <Box alignSelf="flex-end">
        //       <Label
        //         icon="dollar-sign"
        //         text={`Средняя прибыль с клиента: ${75} р.`}
        //       />
        //     </Box>
        //   </Box>
        // )}
      />
    </Box>
  );
};

export default Info;
