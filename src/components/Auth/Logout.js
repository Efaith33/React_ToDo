import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import './Auth.css';

export default function Logout() {
    const {logout} = useAuth();
    const navigate = useNavigate();

    function handleAuth(){
        logout();
        navigate("/");
    }

  return (
      <div className='logout text-center p-3 bg-dark text-white'>
          <Profile />
          <button onClick={() => handleAuth()} className="btn btn-info">
              Logout
          </button>
      </div>
  );
}
