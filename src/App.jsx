import { React,useState } from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Tijuana, Mexicali, Ensenada, CityCard ,Footer  } from './components/index'
import './css/normalize.css'
import './css/App.css' 


function App() {

  return (
    <BrowserRouter>

      <div className='app'>

        <Routes>
          <Route path="/local-breweries-react-app/home" element={<><Home /><CityCard /></>} />
          <Route path="/tijuana" element={<Tijuana />} />
          <Route path="/ensenada" element={<Ensenada />} />
          <Route path="/mexicali" element={<Mexicali />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
