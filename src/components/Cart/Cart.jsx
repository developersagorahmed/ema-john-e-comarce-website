import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart}=props
    // console.log(props);
    // const {}=props.cart
    let totalPrice=0;
    let totalPriceShipping=0;
    let quantity=0;
    for(const product of cart){
        // product.quantity=product.quantity||1;shortcut way to check quantity;
        if(product.quantity===0){
            product.quantity=1;
        }
        totalPrice=totalPrice+product.price* product.quantity
        totalPriceShipping=totalPriceShipping+product.shipping;
        quantity=quantity+product.quantity;
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
                <p>Selected items: {quantity}</p>
                <p>totalPrice Price: ${totalPrice} </p>
                <p>totalPrice Shipping: ${totalPriceShipping}</p>
                <p>Tex: ${tax.toFixed(2)}</p>
                <h6>Grand totalPrice: ${grandtotalPrice.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;