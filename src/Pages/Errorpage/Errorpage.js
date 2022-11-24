import React from 'react';

const Errorpage = () => {
    return (
        <div className=' h-[600px] flex justify-center items-center text-3xl'>
            <h1 className='mr-6 text-red-500'>404</h1>
            <p className='text-red-500'>Oops! You're lost<br></br>
           The page you are looking for was not found</p>
        </div>
    );
};

export default Errorpage;