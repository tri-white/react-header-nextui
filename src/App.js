import './App.css';
import React, { Component } from 'react';
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import Header from "./Header";
import TeamPage from "./Team";
import AboutPage from "./About";
import PricingPage from "./Pricing";
import GalleryPage from "./Gallery";
import FeaturesPage from "./Features";
import {BrowserRouter, useNavigate, Routes, Route} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
function App() {
  const navigate = useNavigate();
return (
 
      <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </NextUIProvider>
);
  } 
  export default App;