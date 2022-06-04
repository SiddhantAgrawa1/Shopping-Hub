import React, {useState,useEffect} from 'react';
import Card from './Card';
import './css/Cardlist.css';
import data from './data';

const Cardlist = ({setItems,setCarts,Tot}) => {
    const [item, setItem] = useState(0);
    const [cart,setCart] = useState()
    
    useEffect(()=> {
        if (cart) {
            setCarts((oldItem) => [...oldItem,cart]);
         }
        }   
    ,[cart])
    setItems(item);
   
    Tot();
    return(
        <div className='container'>
           { data.map((elem) => {
               let btnT = '';
               (elem['quantity'] === 0 || elem['quantity'] === -1) ? btnT ='Add to cart' : btnT ='Added' ;
               return (
               <Card key={elem['id']} setCart={setCart} setItem={setItem} data={elem} Tot={Tot} cart={cart} btnT={btnT}/> )
            })
        }
        </div>
    )
}

export default Cardlist;