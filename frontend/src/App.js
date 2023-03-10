import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravelOptions from "./pages/TravelOptions";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <Router>
        <div className="navbar glass p-4">
          <a
            href="/"
            aria-label="Welcome to Futourist"
            className="btn btn-ghost normal-case text-xl"
          >
            FuTourist
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/options" element={<TravelOptions />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
          <div className="items-center grid-flow-col">
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p>
              Made with &hearts; by Akanksha Tiwari & Preet Shah for Hack for
              the Future
            </p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
