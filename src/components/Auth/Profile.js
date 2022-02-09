import React from 'react';
import { useAuth } from '../context/AuthContext';


export default function Profile() {
    const {currentUser} = useAuth();

  return (
      <span className='profile p-2'>
          {currentUser.email}
          <img src={currentUser.photoURL} alt={`${currentUser.displayName}`}/>
      </span>
  );
}
