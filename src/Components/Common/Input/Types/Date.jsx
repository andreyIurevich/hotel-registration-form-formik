import React from 'react';

const InputDate = (props) => {
  return (
    <input
      type="date"
      name={props.name}
      onChange={props.onChange}
      value={props.values[props.name] || ''}
    />
  ); 
}

export default InputDate;