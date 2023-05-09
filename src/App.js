
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
import Home from './Components/Home'
import Treatments from './Components/Innerpages/Treatments';
import Treatmentquery from './Components/Innerpages/Treatmentquery';


import Dashboard from './Components/Innerpages/Dashboard';

import Myaccount from './Components/Innerpages/Myaccount';





import Records from './Components/Innerpages/Records';
import Transaction from './Components/Innerpages/Transaction';
import AdminDashboard from './Components/AdminPanel/AdminDashboard';
import AdminRecords from './Components/AdminPanel/AdminRecords';
import AdminTransaction from './Components/AdminPanel/AdminTransaction';
import AdminUsers from './Components/AdminPanel/AdminUsers';
import AdminDoctor from './Components/AdminPanel/AdminDoctor';
import AdminCms from './Components/AdminPanel/AdminCms';
import AdminSettings from './Components/AdminPanel/AdminSettings';
import Certificate from './Components/Innerpages/Certificate';
import AdminLogin from './Components/AdminPanel/Adminlogin';
import AdminForgot from './Components/AdminPanel/Adminforgot';
import AdminRegister from './Components/AdminPanel/Adminregister';




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
       <Route path="/" element={<Home /> } />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatmentquery" element={<Treatmentquery />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/records' element={<Records />} />
          <Route path='/transaction' element={<Transaction />} />


{/* Admin */}

<Route path='/admin/login' element={<AdminLogin/>} />
<Route path='/admin/forgot' element={<AdminForgot/>} />
<Route path='/admin/register' element={<AdminRegister/>} />
<Route path="/admin/dashboard" element={<AdminDashboard />} /> 
<Route path='/admin/records' element={<AdminRecords />} />
          <Route path='/admin/transaction' element={<AdminTransaction />} />
          <Route path='/admin/users' element={<AdminUsers />} />
          <Route path='/admin/doctor' element={<AdminDoctor/>} />
          <Route path='/admin/cms' element={<AdminCms/>} />
          <Route path='/admin/setting' element={<AdminSettings/>} />

          
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App; 
