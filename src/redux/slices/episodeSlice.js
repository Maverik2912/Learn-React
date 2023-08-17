import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prev: null,
    next: null,
    errors: null,
    episodeTitle: null,
}

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const episodeSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setEpisodeTitle: (state, action) => {
            state.episodeTitle = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.episodes = action.payload.results.map(episode => ({
                    ...episode,
                    characters: episode.characters.map(
                        character => character.split('/')
                            .slice(-1)[0]).join(',')
                }))
                state.prev = action.payload.info.prev;
                state.next = action.payload.info.next;
                state.errors = null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })

});

const {reducer: episodeReducer, actions: {setEpisodeTitle}} = episodeSlice;

const episodeActions = {
    getAll,
    setEpisodeTitle
}

export {
    episodeActions,
    episodeReducer
}
