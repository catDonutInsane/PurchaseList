import { useState } from 'react';
import './App.css';
import {Input} from "./conponents/Input"
import {ListItem} from "./conponents/ListItem"

function App() {
  const [list, setList] = useState([])
  let addTask = (name, price,amount)=>{
    if(isNaN(price)) return
    setList([...list,{name, price:price*amount}])
  }
  let totalPrice = list.map(i=>i.price)
                .reduce((prev,next)=>+prev+ +next,0)
                console.log(totalPrice);
  return (
    <div className='wrapper'>
      <p>Укажите сумму,которую готовы потратить </p>
      <Input addTask={addTask} list={list} totalPrice={totalPrice}/>
      {list.map( item =>{
    return <ListItem item={item}/>
  })}
    </div>
  );
}

export default App;
