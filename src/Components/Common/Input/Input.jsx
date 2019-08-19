import React from 'react';
import InputText from './Types/Text';
import InputDate from './Types/Date';
import InputSelect from './Types/Select';
import MealsTypes from './Types/Meals';
import './Input.css';

const Input = (props) => {

  const getInput = () => {
    switch (props.type) {
      case "text":
        return <InputText {...props} />
      case "date":
        return <InputDate {...props} />
      case "select":
        return <InputSelect {...props} />
      case "meals":
        return <MealsTypes {...props} />
      default:
        return <InputText {...props} />
    }
  }

  const label = <label>{props.labelText}</label>;
  const input = getInput();

  return (
    <div className="Input">
      <div className="Input-field">
        {label}
        {input}
      </div>
      <div className="Error-field">

      </div>
    </div>
  );
}

export default Input;