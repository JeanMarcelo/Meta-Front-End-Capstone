import "./styles.css";
import Nav from "./Nav";
import Booking from "./booking";
import Header from "./Header";
import About from "./About";
import Log from "./login";
import Offers from "./Offers";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Naveg = () => (
  <div>
    <Nav />
  </div>
);
const Head = () => (
  <div>
    <Header />
  </div>
);

const contentPath = () => (
  <>
    <Naveg />
    <Head />
    <Offers />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={contentPath} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
