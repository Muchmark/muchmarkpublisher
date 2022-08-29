import './App.css';

import Footer from './Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Service from './Components/Service';
import About from './Components/About';
import Nav from './Nav';
import {
  BrowserRouter,

  Route, Routes
} from "react-router-dom";
import Software from './Components/SecondComp/software';
import Marketing from './Components/SecondComp/Marketing';
import Demand from './Components/SecondComp/Demand';
import Social from './Components/SecondComp/Social';
import Trends from './Components/SecondComp/Trends';
import Content from './Components/SecondComp/Content';
import Brand from './Components/SecondComp/Branding';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Home />}>
            {/* blogs nested route */}
            <Route path="software/:category/:sub" element={<Software />} />
            <Route path="marketing/:category/:sub" element={<Marketing />} />

            <Route path="social/:category/:sub" element={<Social />} />
            <Route path="trends/:category/:sub" element={<Trends />} />
            <Route path="content/:category/:sub" element={<Content />} />
            <Route path="brand/:category/:sub" element={<Brand />} />
            <Route path="demand/:category/:sub" element={<Demand />} />
            {/* blogs nested route end*/}
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>







    </div>
  );
}

export default App;