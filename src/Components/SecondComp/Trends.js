import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./cardComp";
import axios from "axios"
const Trends = () => {
    const [res, setRes] = useState([])
    const { category } = useParams();
    const data = category.split('&')

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Muchmark/blogs/posts?category=software&sub=${data[1]}`).then((res) => { setRes(res.data) }).catch((err) => { console.log(err) })
    }, [category])

    return (
        <div className="mx-5 sm:mx-24">
            <h1>{data[0]}</h1>
            <h1>{data[1]}</h1>
            <div className="cards grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-5">
                {
                    res.map((val, idx) => {
                        if (res) {
                            return (

                                <Card
                                    id={val.id}
                                    category={val.category}
                                    date={val.date}
                                    company={val.company}
                                    title={val.title}
                                    sub={val.sub}
                                    likes={val.likes}
                                    url={val.url}
                                    short={val.short}
                                    long={val.long}
                                    key={idx}

                                />
                            )
                        }
                    })
                }
            </div>


        </div>
    )
}
export default Trends;