import { configureStore } from "@reduxjs/toolkit";
import appointmentsSlice from "../features/appointmentsSlice";
import clientsSlice from "../features/clientsSlice";
import mastersSlice from "../features/mastersSlice";

export const store = configureStore({
  reducer: {
    mastersStore: mastersSlice,
    clientsStore: clientsSlice,
    appointmentsStore: appointmentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
