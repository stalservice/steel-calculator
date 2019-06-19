import React from 'react';
import './btn-metal-rental.css'
import { steelTypes } from '../data'


const BtnMetalRental = ({ activeMetalProfile, setMetalProfile }) => (
  <ul className='btn-metal-rolling'>
    {
      steelTypes.map((item) => {
        const Img = item.img;
        return (
          <li
            key={item.type}
            className={activeMetalProfile.type === item.type ? 'active' : ''}
            onClick={() => setMetalProfile( item )}
          >
            <Img />
          </li>
        );
      })
    }
  </ul>
);

export default BtnMetalRental;
