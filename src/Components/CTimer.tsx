import { useEffect, useState } from "react"

const CTimer = () =>{
    const [data,setData]=useState(false);
    useEffect(()=>{
        console.log("Mounted");
        
    },[])
    return (
        <>
       Ctimer Called :{data.toString()} 
       <button onClick={()=>{setData(!data)}}>Click ME</button>
        </>
    )
}
export default CTimer