import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { appointments, AppointmentType } from "../Home/utils/temp";

export interface AppointmentsState {
  appointments: AppointmentType[];
}

const initialState: AppointmentsState = {
  appointments,
};

export const counterSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<AppointmentType>) => {
      state.appointments.push(action.payload);
    },
    removeAppointment: (state, action: PayloadAction<string>) => {
      const newAppointments = state.appointments.filter((appointment) => {
        return appointment.id !== action.payload;
      });

      state.appointments = newAppointments;
    },
  },
});

export const { addAppointment, removeAppointment } = counterSlice.actions;
export default counterSlice.reducer;
