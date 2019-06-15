import React from 'react';
import Option from './Option';
import { metal } from '../data';
import './select.css'

const Select = ({ selectMetal, selectedMetal }) => {
  const handleChangeMetal = (e) => {
    const value = e.target.value;
    const obj = metal.find((item) => item.id === +value);
    selectMetal(obj)
  };

  return (
    <div className='selects-block'>
      <select
        name="metal"
        value={selectedMetal}
        onChange={handleChangeMetal}
      >
        {metal.map(({ type,id }) => <Option type={type} id={id} key={id} />)}
      </select>

    </div>

  )
};

export default Select;