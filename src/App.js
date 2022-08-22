import './App.css';
// import rocketImg from './assets/rocket.png';
import Signup from './components/Signup';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />

    </Routes>
    </>

  );
}

export default App;
