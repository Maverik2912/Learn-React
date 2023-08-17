import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: [],
    errors: null
}

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async (ids, thunkAPI) => {
        try {
            const {data} = await characterService.byIds(ids);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload;
                state.errors = null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
})

const {reducer: characterReducer, actions} = characterSlice;

const charactersActions = {
    getAll
}

export {
    charactersActions,
    characterReducer
}