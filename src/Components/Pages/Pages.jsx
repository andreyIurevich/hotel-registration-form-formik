import React from 'react';
import Initial from './Initial/Initial';
import Payment from './Payment/Payment';

const Pages = ({ activePage, handleChange, values, setFieldValue }) => {
  return activePage === 'initial' ? 
        <Initial handleChange={handleChange} values={values} /> : 
        <Payment handleChange={handleChange} setFieldValue={setFieldValue} values={values} />;
}

export default Pages;