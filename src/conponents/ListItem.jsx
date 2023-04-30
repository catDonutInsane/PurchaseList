import React from "react";
import style from "./ListItem.module.css"

export const ListItem =(props)=>{
    return (
        <div className={style.wrapper}>
            <div>
            {props.item.name}
            </div>
            <div>
            {props.item.price+" / "+ props.item.amount+"шт."}
            </div>
            <button onClick={()=>props.removeTask(props.item.id)}>X</button>
        </div>
    )
}