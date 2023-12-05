export const Burger = () => {

  return (
    <header className="burger">
      <div id="menu">
        <div
          id="menu-bar"
          onClick={() => {
            document.querySelector("#menu-bar").classList.toggle("change");
            document.querySelector(".nav").classList.toggle("change");
            document.querySelector(".menu-bg").classList.toggle("change-bg");
          }}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className="nav" id="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio & Skills</a>
            </li>
            <li>
              <a href="#contactMe">ContactMe</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-bg" id="menu-bg"></div>
    </header>
  );
};
