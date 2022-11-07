import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ReactNode } from "react";

interface AndroidOnlyKeyboardAwareScrollView {
  OS: "android" | "ios";
  children: ReactNode;
}

const AndroidOnlyKeyboardAwareScrollView = ({
  OS,
  children,
}: AndroidOnlyKeyboardAwareScrollView) => {
  if (OS === Platform.OS) {
    return (
      <KeyboardAwareScrollView scrollEnabled={OS === "ios"}>
        {children}
      </KeyboardAwareScrollView>
    );
  }

  return <>{children}</>;
};

export default AndroidOnlyKeyboardAwareScrollView;
