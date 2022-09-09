import React from "react";
import Card from "./cardComp";
const More = () => {
    return (
        <div className="w-full flex p-2 flex-col sm:flex-row sm:mt-10">
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
                            className="para font-semibold text-lg sm:my-4 sm:w-4/6 p-2 sm:p-4"
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
                <div className="flex flex-col gap-y-4">
                    <div class="rounded overflow-hidden shadow-lg w-full translate-x-6">
                        <a href="#">
                            <div class="relative">
                                <img
                                    class="w-full"
                                    src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="Sunset in the mountains"
                                />
                                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                <a href="#!">
                                    <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        Photos
                                    </div>
                                </a>
                                <a href="!#">
                                    <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        <span class="font-bold">27</span>
                                        <small>March</small>
                                    </div>
                                </a>
                            </div>
                        </a>
                        <div class="px-6 py-4">
                            <a
                                href="#"
                                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                            >
                                Best View in Newyork City
                            </a>
                            <p class="text-gray-500 text-sm">The city that never sleeps</p>
                        </div>
                        <div class="px-6 py-4 flex flex-row items-center">
                            <span
                                href="#"
                                class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                            >
                                <span class="ml-1">learn more..</span>
                            </span>
                        </div>
                    </div>
                    <div class="rounded overflow-hidden shadow-lg w-full translate-x-6">
                        <a href="#">
                            <div class="relative">
                                <img
                                    class="w-full"
                                    src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="Sunset in the mountains"
                                />
                                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                <a href="#!">
                                    <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        Photos
                                    </div>
                                </a>
                                <a href="!#">
                                    <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        <span class="font-bold">27</span>
                                        <small>March</small>
                                    </div>
                                </a>
                            </div>
                        </a>
                        <div class="px-6 py-4">
                            <a
                                href="#"
                                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                            >
                                Best View in Newyork City
                            </a>
                            <p class="text-gray-500 text-sm">The city that never sleeps</p>
                        </div>
                        <div class="px-6 py-4 flex flex-row items-center">
                            <span
                                href="#"
                                class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                            >
                                <span class="ml-1">learn more..</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default More;