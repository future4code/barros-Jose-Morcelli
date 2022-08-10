import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from './AdminHomePage';
import FormPage from './ApplicationFormPage';
import TripPage from './CreateTripPage';
import HomePage from './HomePage';
import ListTripsPage from './ListTripsPage';
import LoginPage from './LoginPage';

function Router() {
    return ( 
       <BrowserRouter>
       <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/AdminHomePage" element={<AdminHomePage/>}/>
          <Route path="/CreateTripPage" element={<TripPage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/ListTripsPage" element={<ListTripsPage/>}/>
          <Route path="/ApplicationFormPage" element={<FormPage/>}/>

       </Routes>
       </BrowserRouter>
    );
  }
  
  export default Router;