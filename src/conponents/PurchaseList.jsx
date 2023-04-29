import React from "react";
import style from "./PurchaseList.module.css"

export const PurchaseList = () =>{
    return(
        <div>
            <div className={style.addPurchase}>
                <input placeholder="Наименование"></input>
                <input placeholder="Цена"></input>
                <button>Добавить</button>
            </div>
        </div>
    )
}