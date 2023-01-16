import {
  Box,
  Conteiner,
  Text,
  TextInput,
  Button,
  RoundIconButton,
} from "../../../../components";
import { useState, useCallback, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { getAllErrors } from "../../../../helpers";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AppointmentsNavigationProps } from "../../../../components/Navigation";
import { ClientType, MasterType } from "../../../utils/temp";
import { CBottomSheet } from "../../../components";
import BottomSheet from "@gorhom/bottom-sheet";
import { durationInputMask } from "../../../../helpers/consts";
import List from "./List";

import { masters, clients } from "../../../utils/temp";

const AddAppointmentSchema = Yup.object().shape({
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

const AddAppointment = ({
  navigation,
}: AppointmentsNavigationProps<"AddAppointment">) => {
  const [bottomSheetVariant, setBottomSheetVariant] = useState<
    "masters" | "clients" | "duration" | null
  >(null);

  const bottomSheet = useRef<BottomSheet>(null);

  const {
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik<{
    client: ClientType | null;
    master: MasterType | null;
    duration: string;
    price: string;
  }>({
    initialValues: {
      client: null,
      master: null,
      duration: "",
      price: "",
    },
    validationSchema: AddAppointmentSchema,
    onSubmit: () => {
      navigation.goBack();
    },
  });

  const footer = (
    <Box padding={"xl"}>
      <RoundIconButton
        backgroundColor="white"
        color="black"
        name="x"
        size={60}
        onPress={() => navigation.goBack()}
      />
    </Box>
  );

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
      <Conteiner pattern={1} leftBottomBorder {...{ footer }}>
        <Box padding="xl">
          <Text variant="title1" marginBottom="m">
            Новый прием
          </Text>

          <Box marginBottom="m">
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
                  touched={touched.client || Boolean(values.client)}
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
                  touched={touched.master || Boolean(values.master)}
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
                touched={touched.duration}
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
              touched={touched.price}
            />
          </Box>

          <Box alignSelf="center">
            <Button
              variant={
                !getAllErrors(errors, touched, touched.price)
                  ? "default"
                  : "primary"
              }
              label="Добавить"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Conteiner>

      {bottomSheetVariant !== null && (
        <CBottomSheet ref={bottomSheet}>
          {bottomSheetVariant !== "duration" ? (
            <List
              mode={bottomSheetVariant}
              onPressItem={
                bottomSheetVariant === "clients"
                  ? handleSelectClient
                  : handleSelectMaster
              }
            />
          ) : (
            <Box />
          )}
        </CBottomSheet>
      )}
    </>
  );
};

export default AddAppointment;
