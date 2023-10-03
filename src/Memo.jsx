import { useState,useEffect,useMemo } from "react";

export default function Memo(){
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    const doubleNumber=useMemo(()=>slowfunction(number),[number])
    
    const themeStyles={
        backgroundColor: dark? 'black' : 'white',
        color: dark? 'white' : 'black'
    }
    return (
    <>
    <input type="number" name="" id="" value={number} onChange={(e=>{
        setNumber(e.target.value)
    })}/>
    <button onClick={()=>setDark(prevColor=>!prevColor)}> Change Theme</button>
    <div style={themeStyles}> {doubleNumber}</div>
    </>)
    function slowfunction(n){
        for(let i=0;i<1000000000;i++)
        return n*2;
    }
}