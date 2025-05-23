import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services';
import CommonTabs from '../../Components/Common/Tabs';

function Services() {
  const [users, setUsers] = useState([]);

useEffect(() => {
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
  const tabs = [
    { label: "Overview", content: <div>OverView</div> },
    { label: "Details", content: <div>Detailes</div> },
    { label: "Contact", content: <div>Contact</div> },
    { label: "Dev", content: <div>Dev</div> },
    { label: "List", content: <div>List</div> },
  ];
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
       <CommonTabs tabList={tabs} tabKey="exampleTabs" />
    </div>
  );
}

export default Services;
