import React,{useRef} from "react";
import style from "./SlideDown.module.css"

export  const SlideDown=()=>{

  let mainBl = useRef();
  
  let chBlocksCoord = ()=>{
    let count = 0;
    let block = Array.from(mainBl.current.children)
    for(let i=0; i<block.length; i++){
      block[i].style.top=100+count+"px"
      count+=80
    }
  }
    let slDOWN = useRef()
    const slideDown=()=>{
        slDOWN.current.style.top=0
        chBlocksCoord()
        // bl.current.style.top=100+"px"
        // bl1.current.style.top=190+"px"
      }
    const slideUp=()=>{
      // bl.current.style.top=-500+"px"
      // bl1.current.style.top=-500+"px"
        slDOWN.current.style.top=-1000+"px"
      }

    return(
        <div className={style.wrapper}>
          
             <div ref={slDOWN} className={style.slideDown}>
             
             <button onClick={
                          slideUp}>Скрыть</button>
             пока здесь ничего нет
             <div ref={mainBl}>
             <div  className={style.blocks} ></div>
             <div  className={style.blocks} ></div>
             </div>
             
             </div>
        <button onClick={slideDown}>Меню</button>
        </div>
       
    )
}