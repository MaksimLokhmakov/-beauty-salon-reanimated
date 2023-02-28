import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { clients, ClientType } from "../Home/utils/temp";

export interface ClientsState {
  clients: ClientType[];
}

const initialState: ClientsState = {
  clients,
};

export const counterSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient: (state, action: PayloadAction<ClientType>) => {
      state.clients.push(action.payload);
    },
    removeClient: (state, action: PayloadAction<string>) => {
      const newClients = state.clients.filter((client) => {
        return client.id !== action.payload;
      });

      state.clients = newClients;
    },
  },
});

export const { addClient, removeClient } = counterSlice.actions;
export default counterSlice.reducer;
