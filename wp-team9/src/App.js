import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/Introduction';

function App() {
 
  /*
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mypage" element={<MyPage />} />
  </Routes>
  */
  return(
    //<Login/>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mypage/:id/:pw" element={<MyPage />} />
    <Route path="/introduction/:id/:restaurant" element={<Introduction />} />
  </Routes>
  );
  
}

export default App;