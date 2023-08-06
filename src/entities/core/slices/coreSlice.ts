import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

type TInitialState = {
  coreTitle: string;
}

const DEFAULT_CORE_TITLE = "Default Title";

const initialState: TInitialState = {
  coreTitle: DEFAULT_CORE_TITLE,
}

const coreSlice = createSlice({
  initialState,
  name: 'coreSlice',
  reducers: {
    setCoreTitle: (state, action: {
      payload: string;
    }) => {
      state.coreTitle = action.payload;
    },
  }
});

export const {
  setCoreTitle,
} = coreSlice.actions;

export const selectCoreTitle = (state: RootState) => state.coreSlice.coreTitle;

export default coreSlice.reducer;