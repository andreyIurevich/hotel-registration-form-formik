import React from 'react';

const MealsTypes = (props) => {
  return (
    <div className="Meals-container">
      {
        props.values.meals.map((meal, index) => {
          return (
            <label key={`mael-${meal.id}`} className="meal">
              <input
                type="checkbox"
                name={meal.name}
                onChange={(e) => { props.updateChoosenMeals(meal.id, e.target.checked); }}
                checked={props.values.choosenMeals.includes(meal.id)}
              />
              {meal.text}
            </label>
          );
        })
      }
    </div>
  );
}

export default MealsTypes;