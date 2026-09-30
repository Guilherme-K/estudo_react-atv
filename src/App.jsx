import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'; 



import Home from './pages/Home'; 

import Login from './pages/Login'; 
import RecipePage from './pages/RecipePage'
import MainLayout from './layouts/MainLayout'; 
import DashBoardPage from './pages/DashBoardPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipe" element={<RecipePage/>}/>
          <Route path="/DashBoardPage" element={<DashBoardPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
