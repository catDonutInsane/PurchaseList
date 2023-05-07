import React,{useRef,  useReducer} from "react";
import style from "./SlideDown.module.css"
import {reducer} from "../../reducers/reducer"
<script src="http://localhost:8097"></script>

export  const SlideDown=()=>{
 



  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  const { count } = state;

 
  let mainBl = useRef();
  
  let chBlocksCoord = (count=0,delay=0.6)=>{
   
    let block = Array.from(mainBl.current.children)
    for(let i=0; i<block.length; i++){
      block[i].style.top=100+count+"px"
      block[i].style.transition=`1s ease ${delay}s` ;
      delay+=0.3
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
        chBlocksCoord(-1000,0)
      }

    return(
        <div className={style.wrapper}>
          
             <div ref={slDOWN} className={style.slideDown}>
             
             <button onClick={
                          slideUp}>Скрыть</button>
             
             <div ref={mainBl}>
             
             <button className={style.blocks} onClick={() => dispatch({ type: "plus" })}>INCREMENT</button>
      <button className={style.blocks} onClick={() => dispatch({ type: "minus" })}>DECREMENT</button>
             </div>
             <h1>count: {count}</h1>
      
             </div>
        <button onClick={slideDown}>Меню</button>
        </div>
       
    )

}