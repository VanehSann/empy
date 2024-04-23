import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import WalletPage from './components/pages/WalletPage';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/wallet" />} />
      <Route path="/wallet" element={<WalletPage />} />
    </Routes>
  );

};