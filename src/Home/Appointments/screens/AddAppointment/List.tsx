import { memo } from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Text, Box } from "../../../../components";
import { InfoBox } from "../../../components";

import { masters, clients } from "../../../utils/temp";

interface ListProps {
  onPressItem: (id: string) => void;
  mode: "clients" | "masters";
}

const List = ({ mode, onPressItem }: ListProps) => {
  const currentData = mode === "clients" ? clients : masters;

  return (
    <>
      <Box borderBottomColor="grey" borderBottomWidth={1} paddingBottom="s">
        <Text variant="title2" fontSize={20}>
          {mode === "clients" ? "Клиенты" : "Мастера"}
        </Text>
      </Box>

      <BottomSheetFlatList
        data={currentData}
        keyExtractor={({ name }) => name}
        renderItem={({ item: { name, phone } }) => (
          <InfoBox
            title={name}
            subtitle={phone}
            id={name}
            onPress={onPressItem}
            swipeable={false}
          />
        )}
      />
    </>
  );
};

export default memo(List);
