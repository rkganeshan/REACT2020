import React,{useState} from 'react';
import ThemeContext from "./Context/ThemeContext"
import HeroSection from './Components/HeroSection';
import Header from "./Components/Header"

function App() {
  const themeHook=useState("light");
  return (
      <ThemeContext.Provider value={themeHook}>
          <div>
            <Header/>
            <HeroSection/>
          </div>
      </ThemeContext.Provider>
    )
}

export default App;
