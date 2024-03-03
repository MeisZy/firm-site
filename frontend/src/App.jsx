import Landing from './components/Landing_Lists';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom';
function App(){

  return (
    <>
      <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/aboutus"   element={<AboutUs/> }/>
          </Routes> 
        <Footer/>
      </div>
              
    </>
  )
}

export default App