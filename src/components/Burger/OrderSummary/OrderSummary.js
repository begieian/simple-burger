import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }
  
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span
            style={{textTransform: 'capitalize'}}
          >{igKey}
          </span>: {this.props.ingredients[igKey]}
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
        <p><strong>Total Price: {this.props.price.toFixed(2)} PHP</strong></p>
        <p>Continue to checkout?</p>
        <Button
          btnType='Danger'
          clicked={this.props.cancelOrder}
        >CANCEL</Button>
        <Button
          btnType='Success'
          clicked={this.props.continueOrder}
        >CONTINUE</Button>
      </>
    )
  }
}

export default OrderSummary;