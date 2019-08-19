import React from 'react';

const InputSelect = (props) => {
  return (
    <select
      name={props.name}
      onChange={props.onChange}
      value={props.values[props.name] || ''}
    >
      {props.options.map((roomType, index) => 
        <option key={`roomType-${index}`} value={roomType.value}>{roomType.text}</option>
      )}
    </select>
  );
}

export default InputSelect;