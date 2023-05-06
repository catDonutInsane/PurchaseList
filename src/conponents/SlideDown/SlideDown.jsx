import React,{useRef} from "react";
import style from "./SlideDown.module.css"

export const SlideDown=()=>{
    let slDOWN = useRef()
    const slideDown=()=>{
        slDOWN.current.style.top=0
      }
      const slideUp=()=>{
        slDOWN.current.style.top=-1000+"px"
      }
    return(
        <div className={style.wrapper}>
             <div ref={slDOWN} className={style.slideDown}>
             <button onClick={slideUp}>Скрыть</button>
             пока здесь ничего нет
             </div>
        <button onClick={slideDown}>Меню</button>
        </div>
       
    )
}