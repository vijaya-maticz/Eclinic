
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
import Treatments from './Components/Innerpages/Treatments';
import Treatmentquery from './Components/Innerpages/Treatmentquery';


import Dashboard from './Components/Innerpages/Dashboard';

import Myaccount from './Components/Innerpages/Myaccount';



<<<<<<< HEAD
import TableView from './Components/Innerpages/TableView';
import OrderNow from './Components/Innerpages/OrderNow';
=======
import Records from './Components/Innerpages/Records';
>>>>>>> b9604f901f4ca25f67b0985e52bb638108236548


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



          <Route path='/ordernow' element={<OrderNow />} />

          <Route path='/records' element={<Records />} />

 


        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App; 
