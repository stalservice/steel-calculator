import React from 'react';
import './btn-metal-rental.css'
import { steelTypes } from '../../data'



const BtnMetalRental = ({ activeMetalProfile, setMetalProfile }) => {

  return (
    <ul className='btn-metal-rolling'>
      {
        steelTypes.map((item) => (
          <li
            key={item.type}
            className={activeMetalProfile.type === item.type ? 'active' : ''}
            onClick={() => setMetalProfile( item )}
          >
            <img src={item.img} alt={item.type} />
          </li>
        ))
      }
    </ul>
  )
};

export default BtnMetalRental;