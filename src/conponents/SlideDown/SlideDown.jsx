import React,{useRef} from "react";
import style from "./SlideDown.module.css"

export  const SlideDown=()=>{
  let bl = useRef()
  let bl1 = useRef()
    let slDOWN = useRef()
    const slideDown=()=>{
        slDOWN.current.style.top=0
        bl.current.style.top=100+"px"
        bl1.current.style.top=190+"px"
      }
    const slideUp=()=>{
      bl.current.style.top=-500+"px"
      bl1.current.style.top=-500+"px"
        slDOWN.current.style.top=-1000+"px"
      }

    return(
        <div className={style.wrapper}>
          
             <div ref={slDOWN} className={style.slideDown}>
             
             <button onClick={
                          slideUp}>Скрыть</button>
             пока здесь ничего нет
             <div ref={bl} className={style.blocks} ></div>
             <div ref={bl1} className={style.blocks} ></div>
             </div>
        <button onClick={slideDown}>Меню</button>
        </div>
       
    )
}