import React from 'react';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li ley={igKey}>
          <span
            style={{textTransform: 'capitalize'}}
          >{igKey}
          </span>: {props.ingredients[igKey]}
        </li>
      )
    });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </>
  )
}

export default OrderSummary;