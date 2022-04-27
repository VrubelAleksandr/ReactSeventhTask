import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./modules/common/components/Navigation";
import Home from "./modules/home/components/Home";
import About from "./modules/about/components/About";
import NotFound from "./modules/common/components/NotFound";
import UsersModule from "./modules/users/UsersModule";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users/*" element={<UsersModule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
