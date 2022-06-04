import React, {useCallback} from 'react';
import './css/Card.css';
import data from './data';

const Card = (props) => {

    //Adding Item to cart
    const AddToCart = useCallback(() => {
        props.setItem((item) => item+1);
        
        if(data[props.data['id']-1]['quantity'] === -1){
            props.setCart(
                { name : props.data['name'],
                id : props.data['id'],
                dprice : props.data['dprice'],
                oprice : props.data['oprice'],
                discount : props.data['discount'],
                imgsrc : props.data['imgsrc'],
                quantity : (props.data['quantity'] + 2)
            } );
            data[props.data['id']-1]['quantity'] += 2;    
        }else{
            props.setCart(
                { name : props.data['name'],
                id : props.data['id'],
                dprice : props.data['dprice'],
                oprice : props.data['oprice'],
                discount : props.data['discount'],
                imgsrc : props.data['imgsrc'],
                quantity : (props.data['quantity'] + 1)
            } );
            data[props.data['id']-1]['quantity'] += 1;
        }

    },[])
    
    return(
        <div className='card'>
            <div>
                <img src={require(props.data['imgsrc'])}></img>
            </div>
            <div id='name'>{props.data['name']}</div>
            <div id='price'>
                <span id='oprice'>${props.data['oprice']} </span>
                <span id='dprice'>${props.data['dprice']}</span>
            </div>
            <div>
            <span id='discount'>Flat {props.data['discount']} off</span>
            </div>
            <div>
                <button onClick={(props.btnT === 'Add to cart') ? AddToCart : null}>{props.btnT}</button>
            </div>
        </div>
    )
}

export default Card;