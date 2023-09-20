import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6506f2ed3a38daf4803ee7f1.mockapi.io/api/cars';

export const getAllCars = createAsyncThunk(
    'cars/getAll',
    async (_, thunkAPI) => {
      
      try {
          const {data} = await axios.get('/autopark');
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

