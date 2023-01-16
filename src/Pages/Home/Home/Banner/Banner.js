import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
            <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i0.wp.com/andrewbutler.net/wp-content/uploads/2016/02/Motorcycle-photographer-Andrew-Butler-Suzuki-GSXR-1000-NIK3814.jpg?fit=2600%2C1735&ssl=1" className="h-[500px] w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://tse3.mm.bing.net/th?id=OIP.wQpdRfaooCGm1wE1PvCW4gHaFJ&pid=Api&P=0" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://tse3.mm.bing.net/th?id=OIP.wQpdRfaooCGm1wE1PvCW4gHaFJ&pid=Api&P=0" className="h-[500px] w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://tse1.mm.bing.net/th?id=OIP.o1sq6kQG-3oMZ6yJGotZ8QHaFF&pid=Api&P=0" className="h-[500px] w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;