import React from "react";
import { useState } from "react";
import style from "./PurchaseList.module.css"
import {ListItem} from "./ListItem"

export const PurchaseList = (props) =>{
    const [name, setName] = useState('')
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState(1)
    return(
        <div className={style.mainWrap}>
            <div className={style.addPurchase}>
                <input onChange={(e)=>setName(e.currentTarget.value)} value={name} placeholder="Название"></input>
                <input onChange={(e)=>setPrice(e.currentTarget.value)} value={price} placeholder="Цена"></input>
                <input onChange={(e)=>setAmount(e.currentTarget.value)} value={amount} type="text" />
                
            </div>
            <button onClick={()=>{
                if(!price||!name){ return}
                else{

                    props.addTask(name, price,amount)
                   props.ch(price)
                        setName("")
                        setPrice("")
                        setAmount(1)
                }     
                }}>Добавить</button>
                {props.list.map( item =>{
    return <ListItem removeCh={props.removeCh} item={item} removeTask={props.removeTask}/>
  })}
        </div>
    )
}