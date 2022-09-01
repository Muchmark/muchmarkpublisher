import React from "react";
const More = () => {
    return (
        <div className="w-full flex p-2 flex-col sm:flex-row">
            <div className="sm:w-3/4">
                <div className=" p-4 justify-around px-10">
                    <h1 className="text-4xl capitalize font-bold m-auto mx-auto text-indigo-500 my-4 mb-16 text-center bg-gray-200 py-4">
                        sample title
                    </h1>
                    <div className="flex gap-10 sm:gap-96 font-bold justify-between">
                        <span className="bg-gray-300 py-3 px-1 rounded-lg">
                            muchmark solution
                        </span>
                        <span className="float-right bg-gray-300 py-3 px-1 rounded-lg">
                            20 september
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div class="">
                            <img
                                className="w-full sm:mt-9"
                                src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Sunset in the mountains"
                            />
                        </div>
                        {/* <div className="img sm:w-2/6 h-full border-2 bg-cover bg-center content-center">
              <img
                src="https://wallpapercave.com/dwp1x/wp10583132.jpg"
                alt=""
                className="object-fill h-48 w-96 object-center"
              />
            </div> */}
                        <p
                            className="para font-semibold text-lg my-4 sm:w-4/6 p-4"
                            style={{ textAlign: 'justify' }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Explicabo totam saepe quis labore ea. A ad reiciendis quasi fuga
                            aliquam inventore, dicta quod earum! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. In magni, dolore quaerat nihil
                            doloremque delectus debitis expedita adipisci ut obcaecati ullam,
                            veritatis aliquid incidunt. Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Explicabo totam saepe quis labore
                            ea. A ad reiciendis quasi fuga aliquam inventore, dicta quod
                            earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                            magni, dolore quaerat nihil doloremque delectus debitis expedita
                            adipisci ut obcaecati ullam, veritatis aliquid incidunt. Lorem
                            ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                            totam saepe quis labore ea. A ad reiciendis quasi fuga aliquam
                            inventore, dicta quod earum! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. In magni, dolore quaerat nihil
                            doloremque delectus debitis expedita adipisci ut obcaecati ullam,
                            veritatis aliquid incidunt. Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Explicabo totam saepe quis labore
                            ea. A ad reiciendis quasi fuga aliquam inventore, dicta quod
                            earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                            magni, dolore quaerat nihil doloremque delectus debitis expedita
                            adipisci ut obcaecati ullam, veritatis aliquid incidunt. Lorem
                            ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                            totam saepe quis labore ea. A ad reiciendis quasi fuga aliquam
                            inventore, dicta quod earum! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. In magni, dolore quaerat nihil
                            doloremque delectus debitis expedita adipisci ut obcaecati ullam,
                            veritatis aliquid incidunt. Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Explicabo totam saepe quis labore
                            ea. A ad reiciendis quasi fuga aliquam inventore, dicta quod
                            earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                            magni, dolore quaerat nihil doloremque delectus debitis expedita
                            adipisci ut obcaecati ullam, veritatis aliquid incidunt.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/4 p-4 border-2 border-indigo-200">
                <h1 className="text-center text-3xl my-4 mb-16 capitalize font-bold text-indigo-500">
                    simiilar bloggs
                </h1>
                <div className="flex flex-col">
                    
                </div>
            </div>
        </div>
    )
}
export default More;