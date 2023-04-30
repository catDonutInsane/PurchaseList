import { useEffect, useState } from 'react';
import './App.css';
import {Input} from "./conponents/Input"
import {ListItem} from "./conponents/ListItem"

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('List'))||[])
  
  let addTask = (name, price,amount)=>{
    if(isNaN(price)) return
    
    setList([...list,{name, price:price*amount, amount}])
    
     
  }
  useEffect(()=>{
    localStorage.setItem("List",JSON.stringify(list))
    
  },[list])

  let totalPrice = list.map(i=>i.price)
                .reduce((prev,next)=>+prev+ +next,0)
  return (
    <div className='wrapper'>
      <p>Укажите сумму,которую готовы потратить </p>
      <Input addTask={addTask}  totalPrice={totalPrice}/>
      {list.map( item =>{
    return <ListItem item={item}/>
  })}
    </div>
  );
}

export default App;
