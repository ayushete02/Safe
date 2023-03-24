import React from 'react';
import { NavLink  } from "react-router-dom";
import Herosection from './Herosection';
import Navbar from './Navbar';
import Screenshot from './Screenshot';
import ProblemSolve from './ProblemSolve';
import Footer from './Footer';
import WorkingProcess from './WorkingProcess';

const LandingPage = () => {
  return (
    <div className='bg-gradient-to-br from-[#170E5F] via-blue-900 to-[#050509]'>
     <Navbar/>
     <Herosection/>
     <Screenshot/>
     <ProblemSolve/>
     <WorkingProcess/>
     <Footer/>
    </div>
  );
}

export default LandingPage;
