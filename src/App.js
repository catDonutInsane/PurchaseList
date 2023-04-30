import { useEffect, useState } from 'react';
import './App.css';
import {Input} from "./conponents/Input"
import {ListItem} from "./conponents/ListItem"

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('List'))||[])
  
  let addTask = (name, price,amount)=>{
    if(isNaN(price)) return    
    setList([...list,{id:Math.random()*100 ,name, price:price*amount, amount}])
  }
  let removeTask = (id)=>{
    let newList = list.filter(item=>item.id!==id)
    setList(newList)
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
    return <ListItem item={item} removeTask={removeTask}/>
  })}
    </div>
  );
}

export default App;
