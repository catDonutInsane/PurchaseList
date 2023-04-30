import React from "react";
import { useState } from "react";
import style from "./PurchaseList.module.css"

export const PurchaseList = (props) =>{
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [amount, setAmount] = useState(1)
    return(
        <div>
            <div className={style.addPurchase}>
                <input onChange={(e)=>setName(e.currentTarget.value)} value={name} placeholder="Название"></input>
                <input onChange={(e)=>setPrice(e.currentTarget.value)} value={price} placeholder="Цена"></input>
                <input onChange={(e)=>setAmount(e.currentTarget.value)} value={amount} type="text" />
                <button onClick={()=>{props.addTask(name, price,amount)
                        setName("")
                        setPrice("")
                }}>Добавить</button>
            </div>
        </div>
    )
}