import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <ul className='flex'>
        <li><img alt="hello" src=""/></li>
        <li><Link to="/">Movies</Link></li>
        <li><Link to="/watchlist">Watch List</Link></li>
       
      </ul>

    </div>
  )
}

export default Header