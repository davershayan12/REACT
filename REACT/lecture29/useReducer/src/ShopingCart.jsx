import { useReducer } from "react"
const initialState={
    items:[],
    totalAmount:0,
    totalItem:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            const existItem=state.items.findIndex(
                item => item.id === action.payload.id
            )
            let updateItems
            if(existItem >=0){
                updateItems=[...state.items]
                updateItems[existItem]={
                    ...updateItems[existItem],
                    quantity:updateItems[existItem].quantity+1
                }
            }
            else{
                updateItems=[
                    ...state.items,
                    {...action.payload,
                        quantity:1,
                    }    
                ]
            }
            return{
                ...state,
                items:updateItems,
                totalAmount:updateItems.reduce((total,item)=>total+item.price*item.quantity,0),
                totalItem:updateItems.reduce((total,item)=>total+item.quantity,0)
                
            }
        case "REMOVE_ITEM":
            const filterItems=state.items.filter((item)=>item.id !== action.payload.id)
            return {
                ...state,
                items:filterItems,
                totalAmount:filterItems.reduce((total,item)=>total+item.price*item.quantity,0),
                totalItem:filterItems.reduce((total,item)=>total+item.quantity,0)

            }
        case "UPDATE_QUANTITY":
            {if(action.payload.quantity === 0){
                return reducer(state,{
                    type:"REMOVE_ITEM",
                    payload:{id:action.payload.id}
                })
            }
            const updateQuantityItems=state.items.map((item)=>{
                item.id===action.payload.id ? {...item,quantity:action.payload.quantity}:item 
            })
            return{
                ...state,
                items:updateQuantityItems,
                totalAmount:updateQuantityItems.reduce((total,item)=>total+item.price*item.quantity,0),
                totalItem:updateQuantityItems.reduce((total,item)=>total+item.quantity,0)
                
            }
        }
            
        default:
            return state
    }


}
export const ShopingCart=()=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const Products=[
        {id:1,name:"pr1",price:67},
        {id:2,name:"pr2",price:69}
    ]
    return(
        <div>
            {Products.map((product)=>(
            <div key={product.id}>
                <h3>name:{product.name} <br />
                price:{product.price}</h3>
                <button onClick={()=>dispatch({
                    type:"ADD_ITEM",
                    payload:product,

                })}>add to cart</button>
            </div>
            ))}
            <div>
                <h2>ShopingCart</h2>
                {state.items.length === 0?(
                    <p>ypour cart is empty</p>
                ):(
                    <div>
                        {
                            state.items.map((item)=>(
                                <div key={item.id}>
                                    <p>
                                        {item.name}-${item.price}x{item.quantity}
                                    </p>
                                    <button onClick={()=>dispatch({
                                        type:"REMOVE_ITEM",
                                        payload:{id:item.id}
                                    })}>remove item</button>
                                    
                                </div>
                                
                            ))
                            
                        }
                        <h3>total:{state.totalItem}</h3>
                        <h3>Total Amount: {state.totalAmount.toFixed(2)}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}