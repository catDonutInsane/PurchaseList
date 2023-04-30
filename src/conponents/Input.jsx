import React from "react";
import { useState } from "react";
import style from "./Input.module.css";
import { PurchaseList } from "./PurchaseList";

export const Input = (props) => {
  const [value, setValue] = useState("");
  const [money, setMoney] = useState(0);
  
  let clickBtn = (e) => {
    if (isNaN(value) || value === "") {
      setValue(value);
      setMoney("Введите число");
    } else {
      setMoney(value);      
    }
    setValue("")
  };
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

        <div>
          <h1>
            вы готовы потратить:{" "}
            {isNaN(value)
              ? "Введите численное значение"
              : props.totalPrice
              ? money - props.totalPrice
              : money}{" "}
            рублей
          </h1>
        </div>
      </div>
      <PurchaseList addTask={props.addTask} />
    </div>
  );
};
