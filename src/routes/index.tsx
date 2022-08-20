import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='cart' element={<MainPage />} />
    </Routes>
  );
};

export default App;
