import React from 'react';
import { NavLink  } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
             <section className="">
    <nav className="navbar navbar-expand-lg shadow-lg py-2 bg-transparent  backdrop-blur-3xl relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between my-2">
        <div className="flex items-center">
   
          <a className="navbar-brand  text-white" href="#!">
            <svg className=" w-5 h-5 ml-2 lg:ml-0 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="#000000" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
            </svg>
          </a>
          <a href="/doc" className='text-white no-underline pr-5 text-lg'>About</a>
          <a href="/doc" className='text-white no-underline  pr-5 text-lg'>Docs</a>
          <a href="/doc" className='text-white no-underline  pr-5 text-lg'>Contact</a>
        </div>
       
        <div className="flex items-center lg:ml-auto">
          <button type="button" className="inline-block px-10  py-2 bg-[#170E5F] text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"><NavLink className=" text-white no-underline" to="/secchat">Safe Chat</NavLink></button>
          
        </div>
      </div>
    </nav>


  </section>
    </div>
  );
}

export default Navbar;
