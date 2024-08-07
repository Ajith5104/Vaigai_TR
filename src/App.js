import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Contact } from "./Components/Contact";
import Ooty from "./component/Ooty";
import { Kodaikanal } from "./component/Kodaikanal";
import { Munnar } from "./component/Munnar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Vaigai_TR" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dindigul-ooty" element={<Ooty />} />
          <Route path="/dindigul-kodaikanal" element={<Kodaikanal />} />
          <Route path="/dindigul-munnar" element={<Munnar />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
