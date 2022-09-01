import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';
export default function card({ id,
  category,
  date,
  company,
  title,
  content,
  likes,
  url }) {
  return (
    <div class="rounded overflow-hidden shadow-lg w-full">
      <a href="#">
        <div class="relative">
          <img
            class="w-full"
            src={url}
            alt="Sunset in the mountains"
          />
          <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <a href="#!">
            <div class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {company}
            </div>
          </a>
          <a href="!#">
            <div class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span class="font-bold">{date[0]}</span>
              <small>{date[1]}</small>
            </div>
          </a>
        </div>
      </a>
      <div class="px-6 py-4">
        <a
          href="#"
          class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </a>
        <p class="text-gray-500 text-sm">{content}</p>
      </div>
      <div class="px-6 py-4 flex flex-row items-center justify-between">
        <span
          href="#"
          class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <Link to="/more"><span class="ml-1 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">learn more..</span></Link>


        </span>
        <div className='flex flex-col'>
          < ThumbUpIcon />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}
