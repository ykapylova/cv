import { Link } from "react-router-dom";
import { Icons } from "./icons";

export const Footer = () => {
  return (
    <footer id="contactMe">
        <div className="bg"></div>
      <div>
        <h2>Contact Me</h2>
      </div>

      <div className="text">
        Feel free to reach out using the following channels:
      </div>
      <Icons />
    </footer>
  );
};
