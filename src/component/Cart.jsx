import React, {useCallback} from 'react';
import './css/Cart.css';
import data from './data';

const Cart = ({Elemdata,Tot,setCarts}) => {
    
    // Incrementing added item
    const addItem = useCallback(() => {
        Elemdata['quantity'] += 1;
        data[Elemdata['id']-1]['quantity'] += 1; 
        Tot();
    },[])

    // Decrementing Added Item
    const subItem =  useCallback(() => {
        if(Elemdata['quantity'] > 1){
            Elemdata['quantity'] -= 1;
            data[Elemdata['id']-1]['quantity'] -= 1;
            Tot();
        }else if (Elemdata['quantity'] === 1){
            Elemdata['quantity'] -= 1;
            data[Elemdata['id']-1]['quantity'] -= 1;
            Tot();
        }
        const checkQuant = (data) => {
            if (data['quantity'] > 0) {
                return data;
            }
        }
        let arr = data.filter(checkQuant);
        setCarts([...arr]);
    },[])
    return (
        
            <div className='item'>
                <div><img id='img' src={require(Elemdata['imgsrc'])}></img></div>
                <div>
                    <div id='name'>{Elemdata['name']}</div>
                    <div id='price'>
                        <span id='oprice'>${Elemdata['oprice']} </span>
                        <span id='dprice'>${Elemdata['dprice']}</span>
                        <span id='discount'>{Elemdata['discount']} off</span>
                    </div>
                    <div id='quant'>
                        <button onClick={subItem}><img src={require('./img/minus.png')} width='12px'/></button>
                        <div>{Elemdata['quantity']}</div>
                        <button onClick={addItem}><img src={require('./img/plus.png')} width='13px'/></button>
                    </div>
                </div>
            </div>
    )
}

export default Cart;