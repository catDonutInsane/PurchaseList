import React from "react";
import style from "./ListItem.module.css"

export const ListItem =(props)=>{
   
    return (
        <div className={style.wrapper}>
            <div className={style.name}>
            {props.item.name}
            </div>
            <div>
            {props.item.price+" / "+ props.item.amount+"шт."}
            </div>
            <button onClick={()=>{props.removeTask(props.item.id)
                props.removeCh(props.item.price,props.item.amount)
            }}>X</button>
        </div>
    )
}