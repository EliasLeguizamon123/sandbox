import { SlaveResponse } from "@/models/slaveResponse.model"
import { configureStore } from "@reduxjs/toolkit";
import { slaveDataSlice } from "./states/slaveData.state";

export interface AppStore {
    slaveData: SlaveResponse;
}

export default configureStore<AppStore>({
    reducer: {
        slaveData: slaveDataSlice.reducer,
    }
})