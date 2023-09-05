import React from 'react';
import {Navbar} from './layouts/NavbarAndFooter/Navbar';
import {Footer} from './layouts/NavbarAndFooter/Footer';
import {HomePage} from './layouts/HomePage/HomePage';



import './App.css';

export const App=()=> {
  return (
    <div>
    <Navbar />
    <HomePage />
    <Footer />
    </div>
  );
}

