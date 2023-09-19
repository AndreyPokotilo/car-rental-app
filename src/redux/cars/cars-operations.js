import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6506f2ed3a38daf4803ee7f1.mockapi.io/api/cars';

export const getAllCars = createAsyncThunk(
    'cars/getAll',
    async (_, thunkAPI) => {
      
      try {
          const {data} = await axios.get('/autopark');
          console.log("{data:", data)
          return data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  // export const getCarById = createAsyncThunk(
  //   'cars/getById',
  //   async (carId, thunkAPI) => {
  //     try {
  //       const { data } = await axios.get(`/autopark/${carId}`);
  //       return data;

  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );

//   export const addCar = createAsyncThunk(
//     'car/addCar',
//     async (fields, thunkAPI) => {
//       try {
//         const { data } = await axios.post('/cars', fields);
//         console.log("data :", data )
//         return data;
        
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );