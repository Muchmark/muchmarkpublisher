import React from 'react'
import image from './Images/Muchmarklogo.png'

function Footer() {
    return (
        <div className='Footer bg-gray-300 text-white text-sm sm:mx-auto'>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left  p-4">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 text-lg">
                            <img src={image} alt="" className=" h-1/2 text-white p-2" />


                        </a>
                        <a href="https://muchmark.in/#"> <p className="mt-2 text-sm text-gray-500">info@muchmark.in</p></a>

                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:justify-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 font-bold">Services</h2>
                            <nav className="list-none mb-10 text-lg">
                                <li>
                                    <a href="https://www.muchmark.in/view_Services_IT" className="text-gray-600 hover:text-gray-800">IT Services</a>
                                </li>
                                <li>
                                    <a href="https://www.muchmark.in/view_Services_MS" className="text-gray-600 hover:text-gray-800">Marketing and sales</a>
                                </li>
                                <li>
                                    <a href="https://www.muchmark.in/view_Services_FS" className="text-gray-600 hover:text-gray-800">Free Services</a>
                                </li>
                                <li>
                                    <a href="https://www.muchmark.in/view_Services_P" className="text-gray-600 hover:text-gray-800">Publisher</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 font-bold">links</h2>
                            <nav className="list-none mb-10 text-lg">
                                <li>
                                    <a href="https://www.muchmark.in/much_career" className="text-gray-600 hover:text-gray-800">Career</a>
                                </li>
                                <li>
                                    <a href="https://www.muchmark.in/view_privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://learningprogram.muchmark.in/" className="text-gray-600 hover:text-gray-800">Learning Program</a>
                                </li>
                                <li>
                                    <a href="https://publisher.muchmark.in/" className="text-gray-600 hover:text-gray-800">Publisher</a>
                                </li>
                            </nav>
                        </div>


                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Muchmark —
                            <a href="https://twitter.com/Muchmark_tweet" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Muchmark</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href="https://www.facebook.com/Muchmark.in" className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/Muchmark_tweet" className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/muchmark_/" className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/muchmark/mycompany/" className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
