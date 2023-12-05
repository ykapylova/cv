import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div>
        <h2>Portfolio & Skills</h2>
        <div className="text">
          Here are several work options available for your consideration.
          <br />
          <br />
          You can explore each one and assess them by following the provided
          link.
          <br />
          <br />
          Engaging in each of the task contributes to my experience and helps me
          acquire new skills that will be beneficial for upcoming projects.
        </div>
      </div>
      <div className="projects">
        <Link
          to="https://yana261099.github.io/AKAD./app/homepage"
          className="project1"
          target="_blank"
        >
          <img src="image 1.png" alt="" />
          <div className="bg">
            <div className="text">
              <h3>AKAD Layout Completion</h3>
              <div>
                A final project after IT-Academy courses, marking my first
                completed web design project.
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://yana261099.github.io/AKAD./app/homepage"
          className="project2"
          target="_blank"
        >
          <img src="image 3.png" alt="" />
          <div className="bg">
            <div className="text">
              <h3>Thoughts Room</h3>
              <div>
                A project focused on exploring interactive animations such as
                simulated falling objects using both custom-made and third-party
                libraries.
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://ykapylova.github.io/Eisenhower-Matrix/"
          className="project3"
          target="_blank"
        >
          <img src="image 2.png" alt="" />
          <div className="bg">
            <div className="text">
              <h3>Eisenhower Matrix</h3>
              <div>
                A drag-and-drop application written in Vanilla JS, representing
                the Eisenhower Matrix for task prioritization.
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://yana261099.github.io/AKAD./app/homepage"
          className="project4"
          target="_blank"
        >
          <img src="image 4.png" alt="" />
          <div className="bg">
            <div className="text">
              <h3>ToDo List: Web App Algorithm with Local Storage </h3>
              <div>
                A project centered around working with Local Storage, marking my
                first attempt at writing a web application algorithm.
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://tiptop-crystal.web.app/"
          className="project5"
          target="_blank"
        >
          <img src="image 7.png" alt="" />
          <div className="bg">
            <div className="text">
              <h3>
                Vocal Studio Platform: React.js and Firebase Implementation
              </h3>
              <div>
                A functional online platform for a vocal studio, developed using
                React.js and Firebase. Features include a student dashboard,
                schedule tracking, chat functionality, and an administrative
                panel.
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://www.figma.com/file/rHIibBoYSeMTgRikKYCXC0/Untitled?type=design&node-id=0%3A1&mode=design&t=hWHn6Q6D53pYVNRg-1"
          className="project6"
          target="_blank"
        >
          <img src="image 5.png" alt="" />
          <div className="bg">
            <div className="text">
              <h3>Landing Page Design: Introduction to Figma</h3>
              <div>
                A project introducing the use of Figma through the design of a
                functional landing page.
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://itgen.io/"
          className="project7"
          target="_blank"
        >
          <img src="image 6.png" alt="" />
          <div className="bg">
            <div className="text">
              <h3>Itgen.io website</h3>
              <div>
                Development and support of the Itgen.io website on Tilda.
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
