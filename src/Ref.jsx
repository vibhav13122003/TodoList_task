import { useState,useRef,useEffect } from "react";
export default function Ref (){
const [name,setName]=useState('')





return(
    <div>
<input type="text" name="" id="" value={name} onChange={e=>setName(e.target.value)} />
<div>My name is {name}</div>
</div>

)
}