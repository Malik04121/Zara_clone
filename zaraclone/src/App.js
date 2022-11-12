import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Allroutes from './Component/Allroute';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
