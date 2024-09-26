import { Home } from "./components/home";
import { Header } from "./components/header";
import { BrowserRouter, Link } from 'react-router-dom'

import "./css/header.css";
import "./css/home.css";
import "./css/about.css";
import "./css/career.css";
import "./css/portfolio-skills.css";
import "./css/hobbies.css";
import "./css/footer.css";
import { About } from "./components/about";
import { Career } from "./components/career";
import { Portfolio } from "./components/portfolio-skills";
import { Footer } from "./components/footer";
import { Burger } from "./components/burger";
import { Hobbies } from "./components/hobbies";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Burger />
        <Home />
        <About />
        <Career />
        <Portfolio />
        <Hobbies />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
