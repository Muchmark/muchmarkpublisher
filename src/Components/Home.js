import React from "react";
import Midel from "../Middel";
import Blogs from "../Blogs";
import Footer from "../Footer";
import Card from "../Card";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

import './Home.css'
import MenuIcon from '@mui/icons-material/Menu';
function Home() {
    const [display, changeDisplay] = useState(true);
    const changeStyle = () => {
        changeDisplay(!display);
    };
    return (
        <div className="App relative">
            {display ? (

                <button className="sm:hidden"><CloseIcon onClick={changeStyle} /></button>
            ) : (

                <button className="sm:hidden"> <MenuIcon onClick={changeStyle} className="sm:hide" /></button>


            )}
            {
                display ? (<nav className="maindropdown transition ease-in-out delay-150">
                    <ul className="flex flex-col sm:flex-row border-2 border-green-500 items-center content-center justify-center w-full">
                        <li className="w-full sm:1/7 text-md border-2 border-white">
                            software

                            <ul className="w-full sm:w-48 sm:left-2">
                                <li><Link to="/blogs/software/software&software">software</Link></li>
                                <li><Link to="/blogs/software/software&crm">CRM</Link></li>
                                <li><Link to="/blogs/software/software&marketingautomationservice">marketing automation service</Link></li>
                                <li><Link to="/blogs/software/software&marketingautomation">marketing automation</Link></li>
                                <li><Link to="/blogs/software/software&automation">automation</Link></li>
                                <li><Link to="/blogs/software/software&vendor">Vendor</Link></li>
                                <li><Link to="/blogs/software/software&autoresponder">autoresponder</Link></li>
                                <li><Link to="/blogs/software/software&effeciency">Effeciency</Link></li>
                                <li><Link to="/blogs/software/software&startup">Startup</Link></li>
                                <li><Link to="/blogs/software/software&smallbuisness">Small buisness</Link></li>


                            </ul>
                        </li>
                        <li className="w-full sm:1/7 border-2 border-white">
                            Trends
                            <ul className="w-full sm:w-48">
                                <li><Link to="/blogs/trends/Trends&Trends">Trends</Link></li>
                                <li><Link to="/blogs/trends/Trends&Hashtags">Hashtags</Link></li>
                                <li><Link to="/blogs/trends/Trends&Marketing">Marketing Ai</Link></li>
                                <li><Link to="/blogs/trends/Trends&Industry">Industry</Link></li>
                                <li><Link to="/blogs/trends/Trends&Analysis">Analysis</Link></li>
                                <li><Link to="/blogs/trends/Trends&Paid">Paid content</Link></li>
                                <li><Link to="/blogs/trends/Trends&User">User Generated</Link></li>
                                <li><Link to="/blogs/trends/Trends&Viral">Viral</Link></li>
                                <li><Link to="/blogs/trends/Trends&E-marketing">E-marketing</Link></li>
                                <li><Link to="/blogs/trends/Trends&Starts">Starts</Link></li>
                            </ul>
                        </li>
                        <li className="w-full sm:1/7 border-2 border-white">
                            social media
                            <ul className="w-full sm:w-48">

                                <li><Link to="/blogs/social/socialmedia&socialmedia">Social media</Link></li>
                                <li><Link to="/blogs/social/socialmedia&Media">Media</Link></li>
                                <li><Link to="/blogs/social/socialmedia&Social">Social</Link></li>
                                <li><Link to="/blogs/social/socialmedia&Hashtag">Hashtag</Link></li>
                                <li><Link to="/blogs/social/socialmedia&network">Social network</Link></li>
                                <li><Link to="/blogs/social/socialmedia&paid">paid content</Link></li>
                                <li><Link to="/blogs/social/socialmedia&generated">user generated</Link></li>
                                <li><Link to="/blogs/social/socialmedia&Network">Network</Link></li>
                                <li><Link to="/blogs/social/socialmedia&promotion">promotion</Link></li>
                                <li><Link to="/blogs/social/socialmedia&viral">viral</Link></li>
                            </ul>
                        </li>
                        <li className=" w-full sm:1/7 border-2 border-white">

                            Demand generation
                            <ul className="w-full sm:w-48">
                                <li><Link to="/blog/social/Demandgeneration&demandgeneration">demand generation</Link></li>
                                <li><Link to="/blog/social/Demandgeneration&demand">demand</Link></li>
                                <li><Link to="/blog/social/Demandgeneration&leadmanagemant">lead managemant</Link></li>
                                <li><Link to="/blog/social/Demandgeneration&MQL">MQL</Link></li>
                                <li className="text-sm"><Link to="/blog/social/Demandgeneration&account">account based marketingliu</Link>l</li>
                                <li>rresource management</li>
                                <li className="text-sm">marketing quilified leadliul</li>
                                <li className="text-sm">saled quilified opportunity</li>
                                <li>Generation</li>
                                <li>SQO</li>
                            </ul>
                        </li>
                        <li className=" w-full sm:1/7 border-2 border-white">
                            <Link to="/blogs/marketing"> Marketing automation  </Link>
                            <ul className="w-full sm:w-48">
                                <li>Marketing automation</li>
                                <li className="text-sm">Marketing automation service</li>
                                <li>Automation</li>
                                <li>Lead scoring</li>
                                <li>Lead rank</li>
                                <li>CRM</li>
                                <li>Lead Management</li>
                                <li>Lead nurturing</li>
                                <li className="text-sm">Markting qulified lead</li>
                                <li>Auto responder</li>
                            </ul>
                        </li>
                        <li className=" w-full sm:1/7 border-2 border-white">
                            <Link to="/blogs/content">Content markeing</Link>
                            <ul className="w-full sm:w-48">
                                <li>content marketing</li>
                                <li>storytelling</li>
                                <li>distribution</li>
                                <li>publisher</li>
                                <li>custom publisher</li>
                                <li>SEO</li>
                                <li>writing</li>
                                <li>paid content</li>
                                <li>audience</li>
                                <li>keyword</li>
                            </ul>
                        </li>
                        <li className="w-full sm:1/7 border-2 border-white">
                            <Link to="/blogs/brand">branding</Link>
                            <ul className="w-full sm:w-48">
                                <li>content marketing</li>
                                <li>storytelling</li>
                                <li>distribution</li>
                                <li>publisher</li>
                                <li>custom publisher</li>
                                <li>SEO</li>
                                <li>writing</li>
                                <li>paid content</li>
                                <li>audience</li>
                                <li>keyword</li>
                            </ul></li>
                        <li className="border-2 w-full sm:1/7 border-white">
                            resources
                            <ul className="w-full sm:w-48 sm:right-12">
                                <li className="">
                                    webinar series ..
                                    <ul className="w-full sm:w-48 sm:right-10 ">
                                        <li>webinar1</li>
                                        <li>webinar2</li>
                                        <li>webinar3</li>
                                        <li>webinar4</li>
                                    </ul>
                                </li>
                                <li>
                                    white papers/ebooks/guids ...
                                    <ul className="w-full sm:w-48 sm:right-10 ">
                                        <li>sample1</li>
                                        <li>sample2</li>
                                        <li>sample3</li>
                                        <li>sample4</li>
                                    </ul>
                                </li>
                                <li>
                                    Articles ..
                                    <ul className="w-full sm:w-48 sm:right-10 ">
                                        <li>artical1</li>
                                        <li>artical2</li>
                                        <li>artical3</li>
                                        <li>artical4</li>
                                    </ul>
                                </li>
                                <li>
                                    widget ..
                                    <ul className="w-full sm:w-48 sm:right-10">
                                        <li>widget 1</li>
                                        <li>widget 2</li>
                                        <li>widgrt 3</li>
                                        <li>widgrt 4</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>) : ("")
            }




            <Outlet />
            <div>
                watching latest blogs........
            </div>
        </div>
    );
}

export default Home;