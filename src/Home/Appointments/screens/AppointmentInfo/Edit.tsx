import * as Yup from "yup";
import { useFormik } from "formik";
import { TouchableOpacity, Dimensions } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

import { Box, Text, TextInput, theme } from "../../../../components";
import { ConfirmSlide, CBottomSheet } from "../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { durationInputMask } from "../../../../helpers/consts";

// ? temp
import { masters, clients, ClientType, MasterType } from "../../../utils/temp";
import List from "../AddAppointment/List";

const { height } = Dimensions.get("window");

const ChangeAppintmentSchema = Yup.object().shape({
  client: Yup.object().required("Required"),
  master: Yup.object().required("Required"),
  duration: Yup.string()
    .min(13, "Too Short!")
    .max(13, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .positive()
    .integer()
    .min(1, "Too Short!")
    .required("Required"),
});

interface EditProps {
  client: string;
  master: string;
  duration: string;
  price: string;
}

const Edit = ({ client, master, duration, price }: EditProps) => {
  const [bottomSheetVariant, setBottomSheetVariant] = useState<
    "masters" | "clients" | null
  >(null);

  const bottomSheet = useRef<BottomSheet>(null);

  const {
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    values,
    errors,
  } = useFormik<{
    client: ClientType | null;
    master: MasterType | null;
    duration: string;
    price: string;
  }>({
    initialValues: {
      client: { name: client, phone: "" },
      master: { name: master, phone: "", percent: 1 },
      duration: duration,
      price,
    },
    validationSchema: ChangeAppintmentSchema,
    onSubmit: () => {},
  });

  const handleSelectClient = useCallback((id: string) => {
    const selectedClient = clients.filter((master) => master.name === id)[0];

    bottomSheet.current?.close();
    setFieldValue("client", selectedClient);
  }, []);

  const handleSelectMaster = useCallback((id: string) => {
    const selectedMaster = masters.filter((master) => master.name === id)[0];

    bottomSheet.current?.close();
    setFieldValue("master", selectedMaster);
  }, []);

  return (
    <>
      <Box height={height * 0.65}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={120}
          contentContainerStyle={{
            paddingBottom: theme.spacing.xxl * 2,
          }}
        >
          <Box paddingHorizontal="xl" paddingTop="s" paddingBottom="m">
            <Text variant="body" textAlign="left" marginBottom="s">
              Основная информация
            </Text>

            <Box marginBottom="s">
              <TouchableOpacity
                onPress={() => {
                  bottomSheet.current?.snapToIndex(0);
                  setBottomSheetVariant("clients");
                }}
              >
                <TextInput
                  icon="user"
                  placeholder="Выберите клиента"
                  pointerEvents="none"
                  value={values.client?.name}
                  editable={false}
                  error={errors.client}
                  touched={true}
                />
              </TouchableOpacity>
            </Box>

            <TouchableOpacity
              onPress={() => {
                bottomSheet.current?.snapToIndex(0);
                setBottomSheetVariant("masters");
              }}
            >
              <Box marginBottom="s">
                <TextInput
                  icon="user"
                  placeholder="Выберите мастера"
                  pointerEvents="none"
                  value={values.master?.name}
                  editable={false}
                  error={errors.master}
                  touched={true}
                />
              </Box>
            </TouchableOpacity>

            <Box marginBottom="s">
              <TextInput
                icon="clock"
                placeholder="Укажите длительность"
                value={values.duration}
                onChangeText={handleChange("duration")}
                onBlur={handleBlur("duration")}
                error={errors.duration}
                touched={true}
                mask={durationInputMask}
                maxLength={13}
              />
            </Box>

            <TextInput
              icon="dollar-sign"
              placeholder="Введите цену"
              value={values.price}
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              error={errors.price}
              touched={true}
            />
          </Box>

          <ConfirmSlide onConfirm={() => alert("Изменения сохранены")} />
        </KeyboardAwareScrollView>
      </Box>

      {bottomSheetVariant !== null && (
        <CBottomSheet ref={bottomSheet}>
          <List
            mode={bottomSheetVariant}
            onPressItem={
              bottomSheetVariant === "clients"
                ? handleSelectClient
                : handleSelectMaster
            }
          />
        </CBottomSheet>
      )}
    </>
  );
};

export default Edit;
