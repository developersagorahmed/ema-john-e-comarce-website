import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart}=props
    // console.log(props);
    // const {}=props.cart
    let totalPrice=0;
    let totalPriceShipping=0;
    for(const product of cart){
        totalPrice=totalPrice+product.price
        totalPriceShipping=totalPriceShipping+product.shipping;
        // console.log(product);
    }
    const tax=totalPrice*7/100;
    const grandtotalPrice=totalPrice+totalPriceShipping+tax


    // let totalPriceShipping=0;
    
    // for(const product of cart){
    //     totalPriceShipping=totalPriceShipping+product.shipping;
    // }
    return (
        <div className='cart'>
              <h4>order summary </h4>
                <p>Selected items: {cart.length}</p>
                <p>totalPrice Price: ${totalPrice} </p>
                <p>totalPrice Shipping: ${totalPriceShipping}</p>
                <p>Tex: ${tax.toFixed(2)}</p>
                <h6>Grand totalPrice: ${grandtotalPrice.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;