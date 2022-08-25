import './App.css';
import image from './Images/Muchmarklogo.png'

function Nav() {
    return (
        <div className="Nav">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="##" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={image} alt="" className=" h-16 text-white p-2" />

                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a href="##" className="mr-5 hover:text-gray-900">Home</a>
                        <a href="##" className="mr-5 hover:text-gray-900">about us</a>
                        <a href="##" className="mr-5 hover:text-gray-900">services</a>
                        <a href="##" className="mr-5 hover:text-gray-900">Contact us</a>
                    </nav>
                    <button className=" sm:hidden inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Nav;
