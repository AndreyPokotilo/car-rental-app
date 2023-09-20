import { Route, Routes } from 'react-router-dom';
import { Autopark } from 'pages/Autopark/Autopark';
import { Favorites } from 'pages/Favorites/Favorites';
import { HomePage } from 'pages/HomePage/HomePage';
import AppBar from './AppBar/AppBar';

export function App() {
  

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
