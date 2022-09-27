import { SlaveResponse } from "@/models/slaveResponse.model";
import { createSlice } from "@reduxjs/toolkit";

export const slaveDataEmptyState: SlaveResponse = {
    status: "",
    code: 500,
    Autorization: ""
}

export const slaveDataSlice = createSlice({
    name: 'slaveData',
    initialState: slaveDataEmptyState,
    reducers: {
        createSlaveData: (state, action) => action.payload,
        modifySlaveData: (state, action) => ({...state, ...action.payload}),
        resetSlaveData: () => slaveDataEmptyState
    }
})

export const { createSlaveData, modifySlaveData, resetSlaveData} = slaveDataSlice.actions;

export default slaveDataSlice.reducer;