import React from "react";
import { useState } from "react";
import style from "./Input.module.css"
import {PurchaseList} from "./PurchaseList"
export const Input=(props)=>{
    const [value, setValue] = useState("")
    const [money, setMoney] = useState(0)
    const pressEnter=(e)=>{
        if(e.key==="Enter"){
            if(isNaN(value)|| value===""){
                setValue(value)
                setMoney("Введите число")
                e.currentTarget.value = ""
                
            }else{
                setMoney(value)
            console.log(money);
            e.currentTarget.value = ""
            }
            
          
        }
    }
    
    return(
        <div className={style.main}>
        <div className={style.wrapper}>

            <div className={style.inpbnt}>
            <input 
            onChange={(e)=>{
                setValue(e.currentTarget.value)
                }}
            onKeyDown={pressEnter}
                    value={value} 
                    className={style.inputSum} 
                    type="text" 
                    placeholder="введите сумму"></input>
                <button>OK</button>
            </div>

                    <div>
                        <h1>вы готовы проебать: {isNaN(value)?"Введите численное значение":props.totalPrice?money-props.totalPrice:money} рублей</h1>
                    </div>
                    
        </div>
        <PurchaseList addTask={props.addTask}/>
        </div>
    )
}