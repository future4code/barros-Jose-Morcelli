import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from "../pages/HomePage";
import { ListTripPage } from '../pages/ListTrip/ListTripsPage';
import { LoginPage } from "../pages/LoginPage"
import { ApplicationFormPage } from '../pages/AppliFormPage/ApplicationFormPage'
import { AdminHomePage } from "../pages/AdminHomePage";
import { CreateTripePage } from '../pages/CreateTripPage';
import  {TripDetailsPage}  from "../pages/TripDetailsPage";

export const RoutesPage = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/trip/list" element={ <ListTripPage/> }/>
        <Route path="/trip/application" element={ <ApplicationFormPage/>}/>
        <Route path="/login" element={ <LoginPage/> }/>
        <Route path="/admin/trips/list" element={ <AdminHomePage/> }/>
        <Route path="/admin/trips/:id" element={ <TripDetailsPage/>}/>
        <Route path="/admin/trips/create" element={ <CreateTripePage/>}/>
      </Routes>
    </BrowserRouter>
  )
} 