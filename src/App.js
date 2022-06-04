import React,{useState} from 'react';
import Cardlist from './component/Cardlist';
import Cart from './component/Cart';
import './App.css';
import Total from './component/Total';

const App = () => {
  const [items,setItems] = useState(0);
  const [carts,setCarts] = useState(false);
  const [toggle,setToggle] = useState(false);
  const [total,setTotal] = useState(0);
  const [MRP,setMRP] = useState(0);

  // To calculate total price 
  const Tot = () => {
    let tot = 0,mrp=0;
    carts ? (
      carts.map((elem) => {
        tot += elem['dprice'] * elem['quantity'];
        mrp += elem['oprice'] * elem['quantity'];
      }),
    setMRP(mrp),
    setTotal(tot)) : null
  }

  // To toggle cart button
  const handle = () => {
     toggle ? setToggle(false) : setToggle(true)
  }

  return (
    <div>
      <div id='container'> 
        <div>Shopping Hub</div>
        <div><button onClick={handle} id='cartbtn' ><img src={require('./component/img/cartimg.png')}/><sup>{carts.length}</sup> </button></div>
      </div>
      {toggle ? (carts ? (<div id='cart'>  {carts.map((elem) => {return (<Cart Elemdata={elem} key={elem['id']-1} Tot={Tot} setCarts={setCarts}/>)})}  <Total total={total} MRP={MRP} carts={carts} /></div>) : (<div id='cartEmp'>Cart is empty</div>)) : null}
      <Cardlist setItems={setItems} setCarts={setCarts} Tot={Tot} />
    </div>
  )
}

export default App;
