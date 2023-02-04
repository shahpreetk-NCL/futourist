import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="navbar bg-primary text-primary-content">
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
        </Routes>
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
          <div className="items-center grid-flow-col">
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p>Made with &hearts; by Akanksha Tiwari & Preet Shah for Hack for the Future</p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
