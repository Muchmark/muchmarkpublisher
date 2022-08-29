import './App.css';
import Card from './Card';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Blogs.css'
function Blogs() {
    const states = ['up', 'delhi', 'gujrat'];
    const cities = {
        up: ['f', 'g', 'l'],
        delhi: ['a', 'b'],
        gujrat: ['tr', 'trt', 'rtt'],
    };
    const [city, setCities] = useState(null);
    const [data,setData]=useState(null)

    return (
        <div className="Blogs">
           
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">MuchMark! The Leading Multi-Channel Marketing Platform</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">MuchMark is the fastest-growing online platform offering multi-channel marketing services to small and large businesses. Our team of enthusiastic professionals and creative minds makes us one of the most loved platforms. Our publishing services, IT services, marketing, and sales services help you make your online presence in style.</p>
                    </div>
                    <div class="flex flex mb-20">

                        <h1 class="sm:text-3xl text-xl font-medium title-font mb-2 sm:mb-4  text-gray-900 border-2 border-blue-500  m-auto p-4 rounded-lg">Latest Blogs</h1>


                    </div>
                    <div>
                        {/* filter start */}
                        <div className="filter text-black font-bold capitalize flex justify-between gap-8 flex-col sm:flex-row mb-5 text-sm sm:text-lg">
                            <select
                                onChange={(e) => {
                                    setCities(e.target.value);
                                }}
                                className="border-2 border-black p-2 rounded-lg text-md w-1/4 sm:w-2/5 mr-4"
                            >
                                <option className="border-2 border-black  capitalize text-black w-1/2">
                                    select state
                                </option>
                                {states.map((val) => {
                                    return (
                                        <option className="border-2 border-black p-2 capitalize">
                                            {val}
                                        </option>
                                    );
                                })}
                            </select>
                            <select  className="border-2 border-black p-2 rounded-lg text-md w-1/4 sm:w-2/5" placeholder=""  onChange={(e)=>{setData(e.target.value)}}>
                                <option className="border-2 border-black capitalize">
                                    selct city
                                </option>
                                {/* {console.log(city)} */}
                                {city
                                    ? cities[city].map((val) => {
                                        return (
                                            <option className="border-2 border-black p-4 mt-4 capitalize text-mdb text-black">
                                                {val}
                                            </option>
                                        );
                                    })
                                    : ''}
                            </select>
                            <div className='search'></div>
                            <button className='primary border-2 border-black  px-5 rounded-lg text-black sm:w-1/5 sm:w-12 w-24 m-auto hover:bg-gray-200'>Search</button>

                        </div>
                        {/* filter end */}

                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>


                </div>
            </section>
        </div>
    );
}

export default Blogs;