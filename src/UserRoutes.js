import { Routes, Route, Navigate } from 'react-router-dom';

import TweetsPage from 'pages/TweetsPage/TweetsPage';
import HomePage from 'pages/HomePage/HomePage';

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
