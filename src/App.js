import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path ='/' element={<Home />} />
        <Route path ='/contact' element={<Contact />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/:post_id' element={<Posts />} />
       
      </Routes> 
    </>
  );
}

export default App;
