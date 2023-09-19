import { createSlice } from '@reduxjs/toolkit';
import { getAllCars} from './cars-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'autopark',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },

    deleteFavorites: (state, action) => {
      console.log("action:", action)
      state.favorites = state.favorites.filter(favorit =>
        favorit.id !== action.payload.id
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.fulfilled, (state, action) => {
        // console.log('action:', action);
        state.cars = action.payload;
        state.isLoading = false;
      })
      
      .addCase(getAllCars.pending, handlePending)

      .addCase(getAllCars.rejected, handleRejected)
  },
});

export const { addFavorites, deleteFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;