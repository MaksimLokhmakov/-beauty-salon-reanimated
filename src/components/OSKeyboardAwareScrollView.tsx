import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ReactNode } from "react";

interface AndroidOnlyKeyboardAwareScrollView {
  OS: "android" | "ios";
  children: ReactNode;
  height: number;
}

const AndroidOnlyKeyboardAwareScrollView = ({
  OS,
  children,
  height,
}: AndroidOnlyKeyboardAwareScrollView) => {
  if (OS === Platform.OS) {
    return (
      <KeyboardAwareScrollView scrollEnabled={OS === "ios"} style={{ height }}>
        {children}
      </KeyboardAwareScrollView>
    );
  }

  return <>{children}</>;
};

export default AndroidOnlyKeyboardAwareScrollView;
