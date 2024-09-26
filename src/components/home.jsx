import { Icons } from "./icons";

export const Home = () => {
  const arr = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
  return (
    <div className="home" id="home">
      <Icons />
      <div className="content">
        <h1 className="title">Hello, I'm Yana</h1>
        <div className="desc">
          Promising front-end developer with a responsible approach and a
          readiness for challenges
        </div>
        <div className="stack">
          {arr.map((_, i) => {
            return (
              <div className="tech">
                <img src={"tech/" + i + ".png"} alt="" srcset="" />
              </div>
            );
          })}
        </div>
        <div className="contact-me-button">
          <div>Contact me</div>
        </div>
      </div>
      <div className="image">
        <img src="main.png" alt="Yana" />
      </div>
    </div>
  );
};
