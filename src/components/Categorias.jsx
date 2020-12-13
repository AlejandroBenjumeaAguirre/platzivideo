import React from 'react';

//Styles
import '../assets/styles/components/Categories.scss';

const Categorias = ({children, title}) => (

  <div className='categorias'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categorias;
