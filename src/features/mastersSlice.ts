import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { masters, MasterType } from "../Home/utils/temp";

export interface MastersState {
  masters: MasterType[];
}

const initialState: MastersState = {
  masters,
};

export const counterSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    addMaster: (state, action: PayloadAction<MasterType>) => {
      state.masters.push(action.payload);
    },
    removeMaster: (state, action: PayloadAction<string>) => {
      const newMasters = state.masters.filter((master) => {
        return master.id !== action.payload;
      });

      state.masters = newMasters;
    },
  },
});

export const { addMaster, removeMaster } = counterSlice.actions;
export default counterSlice.reducer;
