import React from 'react';

//Style
import '../assets/styles/components/Carousel.scss';


function Carousel({ children }) {
  return (

    <section className="carousel">
      <div className="carousel__container">
        {children}
      </div>
    </section>
  );
}


export default Carousel;