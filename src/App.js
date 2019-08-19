import React from 'react';
import { Formik } from 'formik';
import Pages from './Components/Pages/Pages';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activePage: 'initial'
    };
  }

  calculateTotalPrice = (setFieldValue, values) => {
    let totalPrice = 0;
    let roomCost = 0;

    switch(+values.roomType) {
      case 1:
        roomCost = 1000;
        break;
      case 2:
        roomCost = 2000;
        break;
      case 3:
        roomCost = 5000;
        break;
      default:
        roomCost = 1000;
    }

    roomCost = roomCost * (+values.days);

    values.choosenMeals.forEach(meal => {
      switch(meal) {
        case 1:
          totalPrice += 200;
          break;
        case 2:
          totalPrice += 500;
          break;
        case 3:
          totalPrice += 700;
          break;
        default:
          totalPrice += 0;
      }
    });

    totalPrice += roomCost;
    setFieldValue('totalPrice', totalPrice);

    return totalPrice;
  }

  changeActivePage = () => {
    this.setState({
      activePage: this.state.activePage === 'initial' ? 'payment' : 'initial',
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Hotel room</h2>
        <Formik
          onSubmit={(values) => { console.log(values); }}
          initialValues={{ 
            totalPrice: 0, 
            currency: 'rub',
            choosenMeals: [],
            meals: [
              {
                id: 1,
                name: 'breakfast',
                text: 'Breakfast'
              },
              {
                id: 2,
                name: 'lunch',
                text: 'Lunch'
              },
              {
                id: 3,
                name: 'dinner',
                text: 'Dinner'
              },
            ]}
          }
          render={({ handleSubmit, handleChange, setFieldValue, values }) => (
            <form
              className="Registration-from"
              onSubmit={handleSubmit}
              >
              <Pages 
                activePage={this.state.activePage}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                values={values}
              />
              <div className="Buttons-container">
                {
                  this.state.activePage === 'initial' && (
                    <input 
                      type="button"
                      value="Next >" 
                      onClick={this.changeActivePage}  
                    />
                  )  
                }
                {
                  this.state.activePage === 'payment' && (
                    <React.Fragment>
                      <input 
                        type="button"
                        value="< Back" 
                        onClick={this.changeActivePage}  
                      />
                      <input 
                        type="button"
                        value="Total price" 
                        onClick={() => { this.calculateTotalPrice(setFieldValue, values); }} 
                      />
                      <label>{values.totalPrice} rub</label>
                  </React.Fragment>
                  )
                }
              </div>
            </form>
          )}
        >
        </Formik>
      </div>
    );
  }
}

export default App;
