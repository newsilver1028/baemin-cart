import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import CartPage from './CartPage';
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
