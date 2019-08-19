import React from 'react';
import Input from '../../Common/Input/Input';

import './Payment.css';
import '../Pages.css';

const PaymentPage = ({ handleChange, setFieldValue, values }) => {

  const updateChoosenMeals = (mealID, isChecked) => {
    let newChoosenMeals = [...values.choosenMeals];
    
    if (isChecked) {
      newChoosenMeals.push(mealID);
    } else {
      newChoosenMeals = newChoosenMeals.filter(item => item !== mealID);
    }

    setFieldValue('choosenMeals', newChoosenMeals);
  };

  return (
    <div className="Payment-container">
      <div className="form-row">
        <Input
          type="date"
          name="arrivalDate"
          labelText="Arrival date"
          onChange={handleChange}
          values={values}
        />
      </div>
      <div className="form-row">
        <Input
          type="text"
          name="tel"
          labelText="Telephone"
          onChange={handleChange}
          values={values}
        />
      </div>
      <div className="form-row">
        <Input
          type="text"
          name="card"
          labelText="Card number"
          onChange={handleChange}
          values={values}
        />
      </div>
      <div className="form-row">
        <Input
          type="meals"
          labelText="Meals"
          onChange={handleChange}
          updateChoosenMeals={updateChoosenMeals}
          values={values}
        />
      </div>
    </div>
  );
}

export default PaymentPage;