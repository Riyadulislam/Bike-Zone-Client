import React from 'react';

const Errorpage = () => {
    return (
        <div className=' h-[600px] flex justify-center items-center text-3xl'>
            <h1 className='mr-6 font-extrabold text-red-500'>404</h1>
            <p className='text-red-500'>Whoops, that page is gone.<br></br>
           The page you are looking for was not found</p>
           <img src="https://tse4.mm.bing.net/th?id=OIP.Yz_VgwwYdHlf1RAuHtf3EQHaFj&pid=Api&P=0" alt="" />
        </div>
    );
};

export default Errorpage;