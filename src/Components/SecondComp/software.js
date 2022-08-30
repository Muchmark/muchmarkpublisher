import React from "react";
import { useParams } from "react-router-dom";
import Card from "./cardComp";
const Software = () => {
    const { category } = useParams();
    const data = category.split('&')
    //console.log(data)
    return (
        <div className="mx-5 sm:mx-24">
            <h1>
                hello software.......this is {data[0]} and id id  {data[1]}
                
            </h1>
            <div className="cards grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-5">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
      

        </div>
    )
}
export default Software;