import React from 'react';
import Input from '../../Common/Input/Input';

import './Initial.css';
import '../Pages.css';

const InitailPage = ({ handleChange, values }) => {
  return (
    <div className="Initial-container">
      <div className="form-row">
        <Input
          type="text"
          name="name"
          labelText="Your name"
          onChange={handleChange}
          values={values}
        />
      </div>
      <div className="form-row">
        <Input
          type="text"
          name="days"
          labelText="Days count"
          onChange={handleChange}
          values={values}
        />
      </div>
      <div className="form-row">
        <Input
          type="select"
          name="roomType"
          labelText="Room Type"
          options={[
            {
              text: 'Single',
              value: 1,
            },
            {
              text: 'Double',
              value: 2,
            },
            {
              text: 'Executive',
              value: 3
            }
          ]}
          onChange={handleChange}
          values={values}
        />
      </div>
    </div>
  );
}

export default InitailPage;