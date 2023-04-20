
import React, { Suspense, useEffect  } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './Assets/css/styles.css';
import './Assets/css/stylev.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from '../src/Components/Home'
import Dashboard from './Components/Innerpages/Dashboard';
import TableView from './Components/Innerpages/TableView';


// const Land = React.lazy(() => import('./Components/Landing/Land'));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    Aos.refresh();
  }, []);
  return (
    <div className="App">
    <BrowserRouter>
    <Suspense fallback={<div class="spinner">
      <div></div>   
      <div></div>    
      <div></div>    
      <div></div></div>}>
       <Routes>
       <Route path="/"  element={<Home /> } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/tableview' element={<TableView />} />
          
 


        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App; 
