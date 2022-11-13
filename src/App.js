// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Allroutes from './Component/Allroute';
import Footer from './Component/Footer';
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
     document.title="Global Vogue"
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
