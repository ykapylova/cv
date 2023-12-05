import { Icons } from "./icons";

export const Home = () => {
  return (
    <div className="home" id="home">
      <Icons />
      <div className="content">
        <h1 className="title">Hello, I'm Yana</h1>
        <div className="desc">
          Promising front-end developer with a responsible approach and a
          readiness for challenges
        </div>
        <div className="contact-me-button"><div>Contact me</div></div>
      </div>
      <div className="image">
        <img src="main.png" alt="Yana" />
      </div>
    </div>
  );
};
