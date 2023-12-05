import { Link } from "react-router-dom";

export const Career = () => {
  let points = [
    ["2006 - 2017", "Mogilev City Gymnasium No. 1", ["In-depth study of English and mathematics"]],
    [
      "2017 - 2021",
      "Belarusian State University of Informatics and Radioelectronics",
      ["With a degree in Electronic Security Systems"],
    ],
    [
        "2019 - 2020",
        "IT Academy",
        ["Web page development using HTML, CSS & JavaScript"],
      ],
    [
      "2020 - present",
      "Programming teacher at an online school",
      ["HTML&CSS, JS", "Python", "Mobile Apps Development for Kids"],
    ],
    [
      "2023 - present",
      "Tilda website builder",
      [
        "Development and support of the website concept and enhancing its functionality;",
        "improving and correcting the current structure of the web resource;",
        "updating, editing, or replacing the text and visual content of the site;",
        "website technical support.",
      ],
    ],
  ];

  return (
    <div className="career" id="career">
      <div><h2>Academic and Career Phases</h2></div>
      
      <div className="content">
      {points.map((point, index) => {
        return (
          <div className="date-point" key={index}>
            <div className="timeline">
              <div className="year">{point[0]}</div>
              <div className={index != points.length - 1 ? "circle" : "last-circle"}></div>
            </div>
            <div className="text">
              <div className="title">{point[1]}</div>
              <div className="desc">
                <ul>
                    {point[2].map((clarification, index) => {
                        return (
                            <li key={index}>{clarification}</li>
                        )
                    })}
              </ul>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
