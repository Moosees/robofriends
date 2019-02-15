import React from 'react';
import './SearchBox.css';

const SearchBox = ({ changed }) => (
  <div className="searchbox">
    <input type="search" className="searchbox__input" placeholder="search robots" onChange={changed} />
  </div>
);

export default SearchBox;