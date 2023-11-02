import { useLazyQuery } from '@apollo/client';
import React from 'react';
import { SEARCH_USER } from '../../users.gql';
import styles from './SearchBar.module.css';

const SearchBar = ({ setuser, inital, users }) => {

  // Define the useLazyQuery hook and provide a callback function to handle the data
  const [executeQuery, { data }] = useLazyQuery(SEARCH_USER,{
    onCompleted:()=>{
      setuser(data?.searchUsers);
      console.log("da",data);
    }
  });

  const handleSearch = async (e) => {

    // Call the executeQuery function, which will trigger the GraphQL query
    if(e.target.value.length===0){
      inital();
    }
    else{
      setTimeout(async() => {
        await executeQuery({
          variables: {
            search: e.target.value,
          }
        });
      }, 2000);
      
    }
   
    
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for products..."
        // value={query}
        onChange={(e) => handleSearch(e)}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
};

export default SearchBar;
