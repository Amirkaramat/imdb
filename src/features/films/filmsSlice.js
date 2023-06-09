import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showMoreImage:{
    id:null,
    show:false
  },
  loading: false,
  filmsData: {},
  error: "",
};

//Generates Pending ,fulfilled and rejected action-types

export const FetchFilms = createAsyncThunk("film/fetchFilm", (url) => {
  return axios
    .get(url)
    .then((Response) => Response.data);
});

const filmSlice = createSlice({
  name: "films",
  initialState,
  reducers:{
    showMoreImage:(state,action)=>{
      state.showMoreImage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(FetchFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchFilms.fulfilled, (state, action) => {
      (state.loading = false),
        (state.filmsData = action.payload.data),
        (state.error = "");
    });
    builder.addCase(FetchFilms.rejected, (state, action) => {
      (state.loading = false),
        (state.filmsData = {}),
        (state.error = action.error.message);
    });
  },
});

export default filmSlice.reducer
export const  showMoreImageAction = filmSlice.actions.showMoreImage