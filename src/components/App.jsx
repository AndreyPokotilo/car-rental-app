import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Autopark } from 'pages/Autopark/Autopark';
import { Favorites } from 'pages/Favorites/Favorites';
import { HomePage } from 'pages/HomePage/HomePage';
import { getAllCars } from 'redux/cars/cars-operations';
import AppBar from './AppBar/AppBar';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Autopark />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
