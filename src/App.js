import { useState } from 'react';
import './App.css';
import {Input} from "./conponents/Input"
import {ListItem} from "./conponents/ListItem"

function App() {
  const [list, setList] = useState([])
  let addTask = (name, price)=>{
    setList([...list,{name, price}])
  }
  return (
    <div className='wrapper'>
      <p>Укажите сумму,которую готовы проебать </p>
      <Input addTask={addTask} list={list}/>
      {list.map( item =>{
    return <ListItem item={item}/>
  })}
    </div>
  );
}

export default App;
