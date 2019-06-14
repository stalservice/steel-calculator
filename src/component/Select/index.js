import React from 'react';
import Option from './option';
import { metal } from '../../data';
import './select.css'

const Select = ({ setValueMetal, valueSelectMetal }) => {

  const handleChangeMetal = (e) => {
    const value = e.target.value;

    const obj = metal.find((item) => item.id === +value);
    setValueMetal(value, obj)
  };

  return (
    <div className='selects-block'>
      <select
        name="metal"
        value={valueSelectMetal}
        onChange={handleChangeMetal}
      >
        {
          metal.map(({ type,id }) => {
            return (
              <Option type={type} id={id} key={id} />
            )
          })
        }
      </select>

    </div>

  )
};

export default Select;