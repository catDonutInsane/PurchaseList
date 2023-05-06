import React,{useRef} from "react";
import style from "./SlideDown.module.css"

export  const SlideDown=()=>{

  let mainBl = useRef();
  
  let chBlocksCoord = (count=0)=>{
   
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
      }
    const slideUp=()=>{
        slDOWN.current.style.top=-1000+"px"
        chBlocksCoord(-1000)
      }

    return(
        <div className={style.wrapper}>
          
             <div ref={slDOWN} className={style.slideDown}>
             
             <button onClick={
                          slideUp}>Скрыть</button>
             
             <div ref={mainBl}>
             <div  className={style.blocks} >HUI</div>
             <div  className={style.blocks} >PISKA</div>
             </div>
             
             </div>
        <button onClick={slideDown}>Меню</button>
        </div>
       
    )
}