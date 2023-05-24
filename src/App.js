import React from 'react'
import Header from './Components/Header';
import LeftSection from './Components/LeftSection';
import NavHeadline from './Components/NavHeadline';
import HomeSection from './Components/HomeSection';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavHeadline/>
      <LeftSection/>
      <HomeSection/>
    </div>
  )
}

export default App

