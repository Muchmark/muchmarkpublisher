import React from 'react';


export default function card() {
  return (
    <div class="rounded overflow-hidden shadow-lg w-full">
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
        <p class="text-gray-500 text-sm">Are you struggling to come up with new content ideas? The pressure is real. Every other business is producing content on a regular basis. It’s a lot of content being published, every day or quite possibly every minute! How to produce content that will still excite and engage your audience?</p>
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
  );
}
