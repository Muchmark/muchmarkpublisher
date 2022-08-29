import { dividerClasses } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
const Software =()=>{
    const {username}=useParams();
   const  data=username.split('&')
    //console.log(data)
    return(
       <div>
         <h1>
            hello software.......this is {data[0]} and id id  {data[1]}
        </h1>
       
       </div>
    )
}
export default Software;