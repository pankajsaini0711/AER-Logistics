import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/data/layout';
import HomePage from './pages/homepage/homepage';
import About from './pages/about/about';
import PageNotFound from './pages/page-not-found/page-not-found';
import DomesticTransporation from './pages/domestic-transportation/domestic-transportation';
import OceanFreight from './pages/ocean-freight/ocean-freight';
import AirFreight from './pages/air-freight/air-freigt';
import WarehouseManagement from './pages/warehouse-mangement/warehouse-mangement';
import ColdChainLogistics from './pages/cold-chain-logistics/cold-chain-logistics';
import ProjectLogistics from './pages/project-logistics/project-logistics';
import TransportationTechnology from './pages/transportation-technology/transportation-technology';
import ShowFreight from './pages/industries/show-freight';
import AerospaceDefence from './pages/industries/aerospace-defence';
import Automotive from './pages/industries/automotive';
import ConsumerGoods from './pages/industries/consumer-goods';
import Manufacturing from './pages/industries/manufacturing';
import Energy from './pages/industries/energy';
import Technology from './pages/industries/technology';
import HealthCare from './pages/industries/healtcare';
const App: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="service/domestic-transportation" element ={<DomesticTransporation />} />
        <Route path="service/ocean-freight" element ={<OceanFreight />} />
        <Route path="service/air-freight" element ={<AirFreight />} />
        <Route path="service/warehouse-management" element ={<WarehouseManagement />} />
        <Route path="service/cold-chain-logistics" element ={<ColdChainLogistics />} />
        <Route path="service/project-logistics" element ={<ProjectLogistics />} />
        <Route path="service/transportation-technology" element ={<TransportationTechnology />} />
        <Route path="industry/show-freight" element ={<ShowFreight />} />
        <Route path="industry/aerospace-and-defence" element ={<AerospaceDefence />} />
        <Route path="industry/automotive" element ={<Automotive />} />
        <Route path="industry/consumer-goods" element ={<ConsumerGoods />} />
        <Route path="industry/manufacturing" element ={<Manufacturing />} />
        <Route path="industry/energy" element ={<Energy />} />
        <Route path="industry/technology" element ={<Technology />} />
        <Route path="industry/health-care" element ={<HealthCare />} />



         </Route>
         <Route path="*" element={<PageNotFound />} />
      </Routes>
  
  );
};

export default App;