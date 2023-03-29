import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "../Shop/Shop.css"
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
   

useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[]);
useEffect(()=>{
    const storedCart=getShoppingCart();
    const savedCart=[];
//    step 1 get id og the addedProduct
for(const id in storedCart){
    // get product from products using id
    const addedProduct=products.find(product=>product.id===id);
    if(addedProduct){
        // step 3
        const quantity=storedCart[id];
        addedProduct.quantity=  quantity
        savedCart.push(addedProduct);
        // console.log("added product",addedProduct);
    }
    
}
setCart(savedCart)
},[products])

const handelAddToCart=(product)=>{
    const newCart=[...cart,product]
   setCart(newCart)
//    console.log(product);
   addToDb(product.id)
}
    return (
        <div className='shop-container'>
            <div className="products-container">
              {
                products.map(product=><Product
                key={product.id} 
                product={product}
                handelAddToCart={handelAddToCart}
                ></Product>)
              }
              
            </div>
            <div className=" ">
              <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;