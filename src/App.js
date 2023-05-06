import { useEffect, useState } from 'react';
import './App.css';
import {Input} from "./conponents/Input"
import {SlideDown} from "./conponents/SlideDown/SlideDown"


function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('List'))||[])
  let totalPrice =list.map(i=>i.price)
  .reduce((prev,next)=>+prev+ +next,0)
  
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
  

  
  return (
    <div className='wrapper'>
      <SlideDown  />
      
      <p>Укажите Ваш бюджет </p>
      <Input removeTask={removeTask} addTask={addTask} list={list} totalPrice={totalPrice}/>
      
    </div>
  );
}

export default App;
