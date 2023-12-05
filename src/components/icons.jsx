import { Link } from "react-router-dom";

export const Icons = () => {
  return (
    <div className="icons">
      <Link to="mailto:y.kapylova@gmail.com">
        <img src="instagram.png" alt="Gmail" />
      </Link>
      <Link to="mailto:y.kapylova@gmail.com">
        <img src="telegram.png" alt="Gmail" />
      </Link>
      <Link to="mailto:y.kapylova@gmail.com">
        <img src="gmail.png" alt="Gmail" />
      </Link>
      <Link to="mailto:y.kapylova@gmail.com">
        <img src="linkedin.png" alt="Gmail" />
      </Link>
    </div>
  );
};
