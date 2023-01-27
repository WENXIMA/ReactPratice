
import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count => count+1);
    }
    const decrement = () => {
        if(count<1){
            setCount(count=0);
        }
        setCount(count => count-1);
    }
    
    return (
        <div>
            <button data-testid="decrement-button" onClick={decrement}>-</button>
            <button data-testid="increment-button" onClick={increment}>+</button>
            <p>{count}</p>
        </div>
    )
};

export default Counter;

