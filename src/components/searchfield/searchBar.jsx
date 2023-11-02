import { useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { SEARCH_USER } from '../../users.gql';
import styles from './SearchBar.module.css';

const SearchBar = ({ setuser, inital, users }) => {
  const [query, setQuery] = useState('');

  // Define the useLazyQuery hook and provide a callback function to handle the data
  const [executeQuery, { data }] = useLazyQuery(SEARCH_USER,{
    onCompleted:()=>setuser(data?.searchUsers)
  });

  useEffect(() => {
    // This useEffect will run whenever 'query' changes
    const debounceTimer = setTimeout(async () => {
      if (query.length === 0) {
        inital();
      } else {
        await executeQuery({
          variables: {
            search: query,
          },
        });
      }
      
    }, 1000); // Adjust the debounce delay as needed

    return () => {
      // Clean up the previous timer when 'query' changes again
      clearTimeout(debounceTimer);
      
    };
  }, [query, inital, executeQuery]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
