import { createContext,useState ,useEffect} from "react";

const addCartItem = (cartItems,productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id===productToAdd.id); //USe find method to loop through the array find cart has existed item are same as new added item.

    if(existingItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id 
        ? {...cartItem,quantity:cartItem.quantity+1}:cartItem 
        );
    }
    
    return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems,productToRemove) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id===productToRemove.id); //USe find method to loop through the array find cart has existed item are same as new added item.
    if(existingItem.quantity===1){
        return cartItems.filter((cartItem) => cartItem.id!==productToRemove.id)
    }
    if(existingItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === productToRemove.id && cartItem.quantity >=1
        ? {...cartItem,quantity:cartItem.quantity-1}: cartItem
        );
    }
    
    
    return [...cartItems]
}

const deleteItem = (cartItems,productToRemove) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id===productToRemove.id); //USe find method to loop through the array find cart has existed item are same as new added item.
    if(existingItem){
        return cartItems.filter((cartItem) => cartItem.id!==productToRemove.id)
    }
}

export const CartContext = createContext({
    isCaption:false,
    setIsCaption:()=> {},
     cartItems:[],
     addItemToCart : () => {},
     cartCount:0,
     cartTotal:0,
});

export const CartProvider = ({children}) => {
    const [isCaption,setIsCaption] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setcartCount] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);
    useEffect(() => {
        const newCartCount = cartItems.reduce((total,cartItem) => total+cartItem.quantity,0); //(2 indexes)current total, current cartItem. 
        setcartCount(newCartCount);
    },[cartItems]); 
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total,cartItem) => total+cartItem.quantity*cartItem.price,0);
        setcartTotal(newCartTotal);
    },[cartItems]);
    //Every time cartItems changes, re-calculate the cart count again.
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove));
    }
    const deleteItemFromCart = (productToRemove) => {
        setCartItems(deleteItem(cartItems,productToRemove));
    }
    const value = {isCaption,setIsCaption,addItemToCart,cartItems,cartCount,removeItemFromCart,cartTotal,deleteItemFromCart};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}