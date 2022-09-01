import { css } from "@emotion/react";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "./cardComp";
import Data from './Software/dataBase.json'
const Software = () => {
    const { category } = useParams();
    const data = category.split('&')

    return (
        <div className="mx-5 sm:mx-24">
            <h1>{data[0]}</h1>
            <h1>{data[1]}</h1>
            <div className="cards grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-5">
                {
                    Data.map((val, idx) => {
                        if (val.sub === data[1]) {
                            return (

                                <Card
                                    id={val.id}
                                    category={val.category}
                                    date={val.date}
                                    company={val.company}
                                    title={val.title}
                                    content={val.content}
                                    likes={val.likes}
                                    url={val.url}
                                    />
                            )
                        }


                    })
                }
            </div>


        </div>
    )
}
export default Software;