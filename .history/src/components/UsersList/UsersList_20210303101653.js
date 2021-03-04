import React from 'react';
import PropTypes from 'prop-types';
import {user } from 'data/users';


const UserList = () => (
  <div>
    <ul>
        {users.map(({name, average, attendence})=>(
 <li>
 <div>2.3</div>
 <div>
   <p>Adam romański</p>
   <p>attendance: 38%</p>
 </div>
 <button>X</button>
</li>


        ))}
      <li>
        <div>2.3</div>
        <div>
          <p>Adam romański</p>
          <p>attendance: 38%</p>
        </div>
        <button>X</button>
      </li>
    </ul>
  </div>
);

UserList.propTypes = {};

export default UserList;
