import React from "react";
import { useState } from "react";
import style from "./PurchaseList.module.css"

export const PurchaseList = (props) =>{
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    return(
        <div>
            <div className={style.addPurchase}>
                <input onChange={(e)=>setName(e.currentTarget.value)} value={name} placeholder="Название"></input>
                <input onChange={(e)=>setPrice(e.currentTarget.value)} value={price} placeholder="Цена"></input>
                <button onClick={()=>{props.addTask(name, price)
                        setName("")
                        setPrice("")
                }}>Добавить</button>
            </div>
        </div>
    )
}