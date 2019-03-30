import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map(igKeys => {
      return [...Array(props.ingredients[igKeys])].map((_, i) => {
        return <BurgerIngredient key={igKeys + i} type={igKeys} />
      })
    })
    .reduce((acc, el) => {
      return acc.concat(el)
    }, []);
  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={ classes.Burger }>
      <BurgerIngredient type='bread-top' />
      {transformedIngredient}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default Burger;