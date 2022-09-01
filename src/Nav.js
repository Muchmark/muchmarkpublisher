import './App.css';
import image from './Images/Muchmarklogo.png'
import { Link, BrowserRouter } from 'react-router-dom';

function Nav() {
    return (
        <div className="Nav">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center sm:gap-48">
                    <a href="##" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={image} alt="" className="text-white p-2" style={{ height: "100px", width: "180px" }} />

                    </a>
                    <nav className="flex flex-wrap md:ml-auto md:mr-auto text-base justify-between sm:float-right sm:ml-12 sm:text-lg">

                        <Link to="/" className="mr-3 sm:mr-5 hover:text-gray-900 px-1 sm:border-none border-2 border-blue-500 sm:mx-8 rounded-sm">Home</Link>
                        <Link to="/about" className="mr-3 sm:mr-5 hover:text-gray-900 px-1 sm:border-none border-2 border-blue-500 sm:mx-8 rounded-sm">about</Link>
                        <Link to="/services" className="mr-3 sm:mr-5 hover:text-gray-900 px-1 sm:border-none border-2 border-blue-500 sm:mx-8   rounded-sm">services</Link>
                        <Link to="/contact" className="mr-3 sm:mr-5 hover:text-gray-900 px-1 sm:border-none border-2 border-blue-500 sm:mx-8   rounded-sm">Contact us</Link>



                    </nav>
                    {/* <button className=" sm:hidden inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                </div>
            </header>
        </div>
    );
}

export default Nav;
