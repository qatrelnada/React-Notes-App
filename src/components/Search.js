import React from 'react';
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNote }) => {
    return <div className='search'>
        <MdSearch className='search-icon' size='1.5em' />
        <input 
            onChange={(event) => handleSearchNote(event.target.value)}
            placeholder='Type to search.'></input>
    </div>;
};

export default Search;
