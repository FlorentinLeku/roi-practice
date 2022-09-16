import './App.css';
// import rocketImg from './assets/rocket.png';
import Signup from './components/Signup';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import TeamMembers from './components/TeamMembers';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/teammembers" element={<TeamMembers />} />
      <Route path="/contactus" element={<ContactUs />} />


    </Routes>
    </>

  );
}

export default App;
