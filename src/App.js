import './App.css';
import UserTable from './components/userTable/userTable';
import { useLazyQuery } from '@apollo/client';
import { GET_USERS } from './users.gql';
import SearchBar from './components/searchfield/searchBar';
import { useEffect, useState } from 'react';

function App() {

  
  const [execute, { data }] = useLazyQuery(GET_USERS);
  const [users, setUsers] = useState();

  const initialData = ()=>{
      execute();
      setUsers(data?.users)
  }

  useEffect(() => {
    initialData();
  }, [data]);

  

  return (
    <div className="App">
      <div className='searchContainer'>
        <SearchBar setuser={setUsers} inital={initialData} user={users} />
      </div>
      {users&&<p>Users: {users.length}</p>}
      <UserTable users={users} />
    </div>
  );
}

export default App;
