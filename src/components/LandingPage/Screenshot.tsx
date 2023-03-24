import React from 'react';
import img from "../../components/assets/screenshot/s1.png"

const Screenshot = () => {
  return (
    <div className=''>

    <div className='w-[80%] mx-auto -mt-36 shadow-lg bg-[#1f1f1f] bg-transparent'>
        <div className=' pt-8 rounded-lg bg-white border-red '>
      <img src={img} alt="" />

        </div>
    </div>
    </div>
  );
}

export default Screenshot;
