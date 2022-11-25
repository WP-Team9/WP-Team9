import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/Introduction';
import Category from './components/Category';
import Main from './components/Main';

function App() {
 
  return(
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mypage/:id/:pw" element={<MyPage />} />
    <Route path="/category/:category" element={<Category />} />
    <Route path="/introduction/:id/:restaurant" element={<Introduction />} />
  </Routes>
  );
  
}

export default App;