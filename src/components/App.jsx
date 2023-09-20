import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Autopark } from 'pages/Autopark/Autopark';
import { Favorites } from 'pages/Favorites/Favorites';
import { HomePage } from 'pages/HomePage/HomePage';
import { getAllCars } from 'redux/cars/cars-operations';
import AppBar from './AppBar/AppBar';
import { selectedCars } from 'redux/cars/cars-selectors';

export function App() {
  const allCars = useSelector(selectedCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Autopark allCars={allCars}/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
