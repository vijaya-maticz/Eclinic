
import React, { Suspense, useEffect  } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './Assets/css/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from '../src/Components/Home'
import Treatments from './Components/Innerpages/Treatments';
import Treatmentquery from './Components/Innerpages/Treatmentquery';


import Dashboard from './Components/Innerpages/Dashboard';

import Myaccount from './Components/Innerpages/Myaccount';



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
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatmentquery" element={<Treatmentquery />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myaccount" element={<Myaccount />} />


          <Route path='/tableview' element={<TableView />} />
 


        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App; 
