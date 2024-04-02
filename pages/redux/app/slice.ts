import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieList, movieDetail } from "./api";


export interface State {
    mvList: any[],
    mvDetail: any,
    total: any,
}

const initialState: State = {
    mvList: [],
    mvDetail: {},
    total: 0,
}

export const getWebMoviesList = (data: any) => {
    return movieList(data);
}

export const getMovieDetail = (data: any) => {
    return movieDetail(data);
}

export const reducerSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(getWebMoviesList, (state, action) => {
            if(action.payload.httpCode < 400) {
                state.mvList = action.payload?.message?.data,
                state.total = action.payload?.message?.total || 10,
            }
            
        })
        builder.addCase(getMovieDetail, (state, action) => {
            if(action.payload.httpCode < 400) {
                state.mvDetail = action.payload?.message,
            }
        })
    },
})
