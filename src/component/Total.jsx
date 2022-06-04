import React from 'react' ;
import './css/Total.css';

const Total = ({total,MRP,carts}) => {
    const buyNow = () => {
        alert("Congratulation! Your order successfully placed")
    }
    return(
        <div>
            { (carts.length > 0) ?
            ( <div> <div id='tot'>
                <span id='TotText'>Total : </span>
                <span id='mrp'>${MRP}</span>
                <span id='total'>${total}</span>
                <span id='save'>You save ${MRP-total}</span>
            </div>
            <button id='buy' onClick={buyNow}>Buy Now</button> </div>)
            : <div id='empty'>Your Cart is Empty</div>}
        </div>
    )
}

export default Total;