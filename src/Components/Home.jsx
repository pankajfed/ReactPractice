import React from 'react';
import TrendingMovies from './TrendingMovies';
import Pagination from './Pagination';
import Banner from './Banner';
import Header from './Header';

function Home() {
  return (
    <>    
      <Header/>
      <Banner/>
      <TrendingMovies/>
      <Pagination/>
    </>
  )
}

export default Home