import React, { useEffect } from "react";
import Card from "./cardComp";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const More = () => {
    const [resp, setRes] = useState([])
    const location = useLocation()
    const { id,
        category,
        sub,
        date,
        company,
        title,
        short,
        long,
        likes,
        url } = location.state
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Muchmark/blogs/posts?category=${category}&sub=${sub}`).then((res) => {
            setRes(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className="w-full flex p-2 flex-col sm:flex-row sm:mt-10">
            <div className="sm:w-3/4">
                <div className=" p-4 justify-around px-4 sm:px-10">
                    <h1 className="text-4xl capitalize font-bold m-auto mx-auto text-indigo-500 my-4 mb-16 text-center bg-gray-200 py-4">
                        {title}
                    </h1>
                    <div className="flex gap-10 sm:gap-96 font-bold justify-between">
                        <span className="bg-gray-300 py-3 px-2 rounded-lg">
                            {company}
                        </span>
                        <span className="float-right bg-gray-300 py-3 px-2 rounded-lg">
                            {date}
                        </span>
                    </div>
                    <div className="w-full border-2 mt-4">


                        <p
                            className="para font-semibold text-lg sm:my-4 p-2 sm:p-4 text-gray-600 mt-4"
                            style={{ textAlign: 'justify' }}
                        > <img
                                className="sm:w-1/2 sm:mt-9 sm:float-left"
                                src={url}
                                alt="Sunset in the mountains"
                            />
                            {long}
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/4 p-4 border-2 border-indigo-200">
                <h1 className="text-center text-3xl my-4 mb-16 capitalize font-bold text-indigo-500">
                    simiilar blogs
                </h1>
                <div className="flex flex-col gap-y-4">
                    {resp.map((val, idx) => {
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
                    })}

                </div>
            </div>
        </div>
    )
}
export default More;