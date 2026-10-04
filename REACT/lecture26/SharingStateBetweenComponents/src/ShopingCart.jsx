import { useState } from "react"
export const ShopingCart=()=>{
    const [cartItems,setCartItems]=useState({
        reactCourse:0,
        vueCourse:0,
    }
    )
    const Prices={
        reactCourse:49.9,
        vueCourse:69
    }
    const handleAddReactCourse=()=>{
        setCartItems({
            ...cartItems,
            reactCourse:cartItems.reactCourse+1,
        })
    }
    const handleAddVueCourse=()=>{
       if(cartItems.vueCourse< 5){
        setCartItems({
            ...cartItems,
            vueCourse:cartItems.vueCourse+1,
        })}

    }
    const clearCart=()=>{
        setCartItems({
            vueCourse:0,
            reactCourse:0
        })
    }
    return(
        <div>
            <h2>Shoping Cart component</h2>
            <ProductCard
            name="React course"
            price={Prices.reactCourse}
            quantity={cartItems.reactCourse}
            onAddToCart={handleAddReactCourse}/>

            <ProductCard
            name="vue course"
            price={Prices.vueCourse}
            quantity={cartItems.vueCourse}
            onAddToCart={handleAddVueCourse}/>            
            <CartSummary cartItems={cartItems} prices={Prices}/>
            <button onClick={clearCart}>clear Cart</button>
        </div>
    )
}
export const ProductCard=({name ,price,quantity,onAddToCart})=>{
    
    return(
        <div>
            <h3>{name}</h3>
            <p>{price}$</p>
            <p>quantity:{quantity}</p>
            <button onClick={onAddToCart}>Add to card</button>

        </div>
    )
}
export const CartSummary=({cartItems,prices})=>{
    const totalItems=cartItems.reactCourse+cartItems.vueCourse
    const totalPrice=cartItems.reactCourse* prices.reactCourse + cartItems.vueCourse*prices.vueCourse
    return(
        <div>
            <h3>Cart summery</h3>
            <p>Total item: {totalItems}</p>
            <p>Total price: ${totalPrice.toFixed(2)} </p>
            
        </div>
    )
}