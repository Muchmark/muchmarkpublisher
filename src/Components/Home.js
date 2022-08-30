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
                display ? (<nav className="maindropdown transition ease-in-out delay-150 mx-5">
                    <ul className="flex flex-col sm:flex-row border-2 border-green-500 items-center content-center justify-center w-full">
                        <li className="w-full sm:1/7 text-md">
                            software

                            <ul className="w-full sm:w-48 sm:left-2">
                                <li><Link to="/blogs/software/software&software">software</Link></li>
                                <li><Link to="/blogs/software/software&CRM">CRM</Link></li>
                                <li>marketing automation service</li>
                                <li>marketing automation</li>
                                <li>automation</li>
                                <li>Vendor</li>
                                <li>autoresponder</li>
                                <li>Effeciency</li>
                                <li>Startup</li>
                                <li>Smal buisness</li>
                                <li>Startup</li>
                            </ul>
                        </li>
                        <li className="w-full sm:1/7">
                            Trends
                            <ul className="w-full sm:w-48">
                                <li>Trends</li>
                                <li>Hashtags</li>
                                <li>Marketing Ai</li>
                                <li>Industry</li>
                                <li>Analysis</li>
                                <li>Paid content</li>
                                <li>User Generated</li>
                                <li>Viral</li>
                                <li>E-marketing</li>
                                <li>Starts</li>
                            </ul>
                        </li>
                        <li className="w-full sm:1/7">
                            <Link to="/blogs/social">  social media </Link>
                            <ul className="w-full sm:w-48">

                                <li>Sicial media</li>
                                <li>Media</li>
                                <li>Social</li>
                                <li>Hashtag</li>
                                <li>Social network</li>
                                <li>paid content</li>
                                <li>user generated</li>
                                <li>Network</li>
                                <li>promotion</li>
                                <li>viral</li>
                            </ul>
                        </li>
                        <li className=" w-full sm:1/7">

                            <Link to="/blogs/demand">   Demand generation </Link>
                            <ul className="w-full sm:w-48">
                                <li>demand generation</li>
                                <li>demand</li>
                                <li>lead managemant</li>
                                <li>MQL</li>
                                <li>account based marketingliul</li>
                                <li>rresource management</li>
                                <li>marketing quilified leadliul</li>
                                <li>saled quilified opportunity</li>
                                <li>Generation</li>
                                <li>SQO</li>
                            </ul>
                        </li>
                        <li className=" w-full sm:1/7">
                            <Link to="/blogs/marketing"> Marketing automation  </Link>
                            <ul className="w-full sm:w-48">
                                <li>Marketing automation</li>
                                <li>Marketing automation service</li>
                                <li>Automation</li>
                                <li>Lead scoring</li>
                                <li>Lead rank</li>
                                <li>CRM</li>
                                <li>Lead Management</li>
                                <li>Lead nurturing</li>
                                <li>Markting qulified lead</li>
                                <li>Auto responder</li>
                            </ul>
                        </li>
                        <li className=" w-full sm:1/7">
                            <Link to="/blogs/content">Content markeing</Link>
                            <ul className="w-full sm:w-48">
                                <li>cpntent marketing</li>
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
                        <li className="w-full sm:1/7">
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
                        <li className="border-2 w-full sm:1/7 ">
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