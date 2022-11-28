import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import MyPage from './components/MyPage'
import Introduction from './components/Introduction';
import Category from './components/Category';
import Main from './components/Main';
import Subway from './components/Subway';
import CategoryMain from './components/CategoryMain';
import Search from './components/Search';

function App() {
 
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/subway" element={<Subway />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mypage/:id/:pw" element={<MyPage />} />
      <Route path="/category/:what" element={<Category />} />
      <Route path="/category" element={<CategoryMain />} />
      <Route path="/introduction/:id/:restaurant" element={<Introduction />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
  
}

export default App;