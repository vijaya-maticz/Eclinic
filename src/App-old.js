import React, { Suspense , useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './Assets/css/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Experience from './Components/Landing/Experience';
import OnlineExp from './Components/Landing/OnlineExp';
import PropertyType from '../src/Components/BecomeHost/PropertyType'
import StartHosting from './Components/BecomeHost/AfterHost/StartHosting';
import Search from '../src/Components/Landing/Search.js';
import Online from '../src/Components/Landing/online.js';
// import Onlinedetails from '../src/Components/Landing/onlinedetails.js';



import HostAccount from './Components/BecomeHost/HostAccount';



// Modal pages
import SetRules from './Components/BecomeHost/AfterHost/ModalPages/SetRules';
import AreaForGuest from './Components/BecomeHost/AfterHost/ModalPages/AreaForGuest';
import PlaceType from './Components/BecomeHost/Propertytype/PlaceType';
import DoubleCheck from './Components/BecomeHost/AfterHost/ModalPages/DoubleCheck';
import OrganizePhotos from './Components/BecomeHost/AfterHost/ModalPages/OrganizePhotos';
import ConfirmAvail from './Components/BecomeHost/AfterHost/ModalPages/ConfirmAvail'
import PromotList from './Components/BecomeHost/AfterHost/ModalPages/PromotListing'
import CleaningFee from './Components/BecomeHost/AfterHost/ModalPages/CleaningFee';
import PersonalInfo from './Components/BecomeHost/AfterHost/Account/PersonalInfo';
import Insights from './Components/BecomeHost/AfterHost/Insights/Inights';
import LoginSecurity from './Components/BecomeHost/AfterHost/Account/LoginSecurity';


const Land = React.lazy(() => import('./Components/Landing/Land'));

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
    <Suspense fallback={<div>Loading</div>}>
    <Routes>
        <Route path="/" element= {<Land />} />
        <Route index element={<Land />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/Online" element={<Online />} />
        <Route path="/onlineexp" element={<OnlineExp />} />
        {/* <Route path="/onlinedetails" element={<Onlinedetails />} /> */}
        <Route path="/host/property-type" element={<PropertyType/>} />
        <Route path="/hosting" element={<StartHosting/>} />
        <Route path="/hosting/insights" element={<Insights />} />

        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<HostAccount />} />
        <Route path="/account/personal-info" element={<PersonalInfo />} />
        <Route path="/account/login-security" element={<LoginSecurity />}/>


        {/* hosting steps */}
        <Route path="/host/property-type/placetype" element={<PlaceType />} />
 

        {/* modal pagrs */}
        <Route path="/hosting/setrules" element={<SetRules/>}/>
        <Route path="/hosting/areaforguest" element={<AreaForGuest/>} />
        <Route path='/hosting/areaforguest/doublecheck' element={<DoubleCheck/>}/>
        <Route path='/hosting/areaforguest/organizephotos' element={<OrganizePhotos/>} />
        <Route path='/hosting/areaforguest/confirmavail' element={<ConfirmAvail />} />
        <Route path='/hosting/areaforguest/promotlist' element={<PromotList />} />
        <Route path='/hosting/areaforguest/cleaningfee' element={<CleaningFee />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App; 
