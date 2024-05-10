import { useState } from "react";

const Btn = () =>{


const[signedIn,setSignedIn] = useState(false);

    return (
        <>
        <button onClick={()=>{setSignedIn(!signedIn)}}>{signedIn?'Sign out':'Sign In'}</button>
        </>
    )
}

export default Btn