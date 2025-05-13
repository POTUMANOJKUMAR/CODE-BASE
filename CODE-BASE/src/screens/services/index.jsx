import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services';

function Services() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  alert("hi")
  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      console.log(res?.data?.data, "data");
      setUsers(res?.data?.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  fetchUsers();
}, []); // ✅ only once

  return (
    <div>
      <h3>Registered Users:</h3>
      <ul>
       {
  users?.map((user, index) => (
            <li key={user._id || index}>
              {user.email}
            </li>
          ))    
       }
           
       
      </ul>
    </div>
  );
}

export default Services;
