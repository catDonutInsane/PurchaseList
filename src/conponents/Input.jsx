import React, { useEffect, useRef } from "react";
import { useState } from "react";
import style from "./Input.module.css";
import { PurchaseList } from "./PurchaseList";


export const Input = (props) => {
  const [value, setValue] = useState("");
  const [money, setMoney] = useState(JSON.parse(localStorage.getItem('Money'))||0);
  console.log(props.totalPrice);
  
  useEffect(()=>{
    localStorage.setItem("Money",JSON.stringify(money))
    
  },[money])
  const color = useRef()
  
  useEffect(()=>{
    
      color.current.style.color=money>=0?"black":"red"
     
  },[money])

  let clickBtn = (e) => {
    if (isNaN(value) || value === "") {
      setValue(value);
      setMoney("Введите число");
    } else {

      setMoney(value);  

         
    }
    setValue("")
    
  };
  const ch=(price)=>{
    setMoney(money-price)
  }
  const removeCh = (price)=>{
    setMoney(money+price)
  }
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      clickBtn(e);
    }
  };
 
  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <div className={style.inpbnt}>
          <input
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            onKeyDown={pressEnter}
            value={value}
            className={style.inputSum}
            type="text"
            placeholder="введите сумму"
          ></input>
          <button onClick={clickBtn}>
            <span>ok</span>
          </button>
        </div>

        <div >
          <h1>
            вы готовы потратить: {" "} <span ref={color}>{isNaN(value)
              ? "Введите численное значение"
              :money}</span> 
             {" "}рублей
          </h1>
        </div>
      </div>
      <PurchaseList removeCh={removeCh} 
                    removeTask={props.removeTask} 
                    list={props.list} 
                    ch={ch}  
                    addTask={props.addTask} />
    </div>
  );
};
