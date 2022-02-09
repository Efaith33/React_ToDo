import React from 'react';
import './NotFound.css'
import image from './images/images/404notfound.png'

export default function NotFound() {
  return (
  <div className='notFound'>
      <img src={image} alt="Resource not found" />
      <h1>You're Lost in Space</h1>
  </div>);
}