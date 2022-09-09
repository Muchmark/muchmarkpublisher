import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';
export default function card({
  id,
  category,
  sub,
  date,
  company,
  title,
  short,
  long,
  likes,
  url }) {
  return (
    <div className="rounded overflow-hidden shadow-lg w-full">
      <a href="#">
        <div className="relative">
          <img
            className="w-full"
            src={url}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <a href="#!">
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {company}
            </div>
          </a>
          <a href="!#">
            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="font-thin text-xs">{date}</span>

            </div>
          </a>
        </div>
      </a>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </a>
        <p className="text-black text-sm">{short}</p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center justify-between">
        <span
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <Link to="/blogs/more"><span className="ml-1 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">learn more..</span></Link>


        </span>
        <div className='flex flex-col'>
          < ThumbUpIcon />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}
