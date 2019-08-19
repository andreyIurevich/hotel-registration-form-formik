import React from 'react';

const InputText = (props) => {
  return (
    <input
      type="text"
      name={props.name}
      onChange={props.onChange}
      value={props.values[props.name] || ''}
    />
  ); 
}

export default InputText;