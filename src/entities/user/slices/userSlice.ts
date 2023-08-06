import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { IUser } from "../model";

type TInitialState = {
  items: IUser[];
}

const initialState: TInitialState = {
  items: [],
}

const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUsers: (state, action: {
      payload: IUser[];
    }) => {
      state.items = action.payload;
    },
  }
});

export const {
  setUsers,
} = userSlice.actions;

export const selectUsers = (state: RootState) => state.userSlice.items;

export default userSlice.reducer;