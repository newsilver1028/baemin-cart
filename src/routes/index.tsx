import { Routes, Route } from 'react-router-dom';
import CartPage from './CartPage';
import Layout from './components/Layout';
import MainPage from './MainPage';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='cart' element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
