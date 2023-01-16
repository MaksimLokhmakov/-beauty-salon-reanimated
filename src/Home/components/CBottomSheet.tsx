import { useMemo, ReactNode, forwardRef } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../../components";
import BottomSheet from "@gorhom/bottom-sheet";

interface CBottomSheetProps {
  children: ReactNode;
}

const CBottomSheet = forwardRef<BottomSheet, CBottomSheetProps>(
  ({ children, ...props }, ref) => {
    const snapPoints = useMemo(() => ["65", "95%"], []);

    return (
      <BottomSheet
        ref={ref}
        index={1}
        enablePanDownToClose
        style={styles.bottomSheet}
        {...{ snapPoints }}
        {...props}
      >
        <Box flex={1}>{children}</Box>
      </BottomSheet>
    );
  }
);

export default CBottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
