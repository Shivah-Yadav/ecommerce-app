import Navbar from './Components/Navbar'
import Card from './Components/Card'
import './App.css'
import React from 'react'
import CustomerData from './Components/CustomerData'


function App() {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false)

  return (
    <div className="App">
      <Navbar data={setIsLoggedIn} initial={isLoggedIn}/>
      <CustomerData/>
    </div>
  );
}

export default App;
