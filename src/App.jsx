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
          <Route path="/local-breweries-react-app/" element={<><Home /><CityCard /></>} />
          <Route path="/local-breweries-react-app/tijuana" element={<Tijuana />} />
          <Route path="/local-breweries-react-app/ensenada" element={<Ensenada />} />
          <Route path="/local-breweries-react-app/mexicali" element={<Mexicali />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
