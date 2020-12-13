/* eslint-disable react/jsx-fragments */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (

  <>
    <h1>No Encontrado</h1>
    <h2>
      <Link to='/'>
        Regresar
      </Link>
    </h2>
  </>

);

export default NotFound;
