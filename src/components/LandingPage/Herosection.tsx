import React from 'react';
import { NavLink  } from "react-router-dom";

const Herosection = () => {
  return (
    <div>
        <div className="h-[70vh] text-center  text-white py-32 px-6">

      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-center text-white mb-12">A Spam Free<br /><span className="text-white tracking-wide ">Messaging dapp</span></h1>
      <a className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md
       hover:bg-[#EFF1F3] hover:shadow-lg focus:bg-[#EFF1F3] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#EFF1F3] active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button"><NavLink className=" text-white " to="/secchat">Safe Chat</NavLink></a>
    </div>
    </div>
  );
}

export default Herosection;
