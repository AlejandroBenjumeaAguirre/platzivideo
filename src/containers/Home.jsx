/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//Components
import Search from '../components/Search';
import Categories from '../components/Categorias';
import Carousel from '../components/Carrousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
//Styles
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  const list = [mylist, trends, originals];
  const categorias = ['Mi lista', 'Tendencias', 'Originales'];
  return (
    <>
      <Header />
      <Search isHome />
      {categorias.map((category, i) => (
        list[i].length > 0 && (
          <Categories key={category} title={category}>
            <Carousel>
              {list[i].map((item) => (
                <CarouselItem key={item.id} {...item} isList />
              ))}
            </Carousel>
          </Categories>
        )))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
