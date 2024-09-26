import { Link } from "react-router-dom";

export const Hobbies = () => {
  return (
    <div className="hobbies" id="hobbies">
      <div>
        <h2>Here are a few things <br />that bring me joy</h2>
      </div>
      <div className="items">
        <div className="column column1">
          <div className="hobbie">
            <img src="hobbies/image 1.png" alt="" />
            <div className="text">
              TV shows, especially, The Big Bang Theory and The Office
            </div>
            <img src="hobbies/image 2.png" alt="" />
          </div>
        </div>

        <div className="column column2">
          <div className="hobbie">
            <img src="hobbies/image 3.png" alt="" />
            <div className="text">Cultivating and propagating succulents</div>
          </div>
        </div>

        <div className="column column3">
          <div className="hobbie">
            <img src="hobbies/image 4.png" alt="" />
            <div className="text">Making candles</div>
          </div>

          <div className="hobbie">
            <img src="hobbies/image 5.png" alt="" />
            <div className="text">Coffee</div>
          </div>
        </div>

        <div className="column column4">
          <div className="hobbie">
            <img src="hobbies/image 6.png" alt="" />
            <div className="text">Playing the piano</div>
          </div>

          <div className="hobbie">
            <img src="hobbies/image 7.png" alt="" />
            <div className="text">Singing</div>
          </div>
        </div>
      </div>
    </div>
  );
};
