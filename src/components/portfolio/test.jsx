import IMG1 from "../../assets/portfolio-1.png";
import IMG2 from "../../assets/portfolio-2.png";
import IMG3 from "../../assets/CRM.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "../portfolio/portfolio.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    details: "birdviewTravel",
    demo: "https://birdviewtravels.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    details: "gopaddi",
    demo: "http://dribbble.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    details: "birdviewTravelCRM",
    demo: "http://dribbble.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
];

const portfoliodata = [
  {
    id: 1,
    image: [IMG1, IMG2],
    title: "Crypto Currency Dashboard & Financial Visualization",
    details: "birdviewTravel",
    link: "https://birdviewtravels.com/",
  },
  {
    id: 2,
    image: [IMG1, IMG2],
    title: "Charts templates & infographics in Figma",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
  {
    id: 3,
    image: [IMG1, IMG2],
    title: "Figma dashboard UI kit for data design web apps",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
  {
    id: 4,
    image: [IMG1, IMG2],
    title: "Maintaining tasks and tracking progress",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
  {
    id: 5,
    image: [IMG1, IMG2],
    title: "Charts templates & infographics in Figma",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
  {
    id: 6,
    image: [IMG1, IMG2],
    title: "Charts templates & infographics in Figma",
    details: "http://github.com/",
    demo: "http://dribbble.com/",
  },
];
const Portfolio = () => {
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);

  const handleDetailsClick = (id) => {
    const selectedItem = portfoliodata.find((item) => item.id === data.id);
    setSelectedItemDetails(selectedItem);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, details, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={details}
                  className="btn"
                  data-bs-toggle={`modal${id}`}
                  data-bs-target={`#exampleModal${id}`}
                  onClick={() => handleDetailsClick(id)}
                >
                  Details
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* <!-- Modal --> */}
      <div className="modal-box">
        {selectedItemDetails && (
          <div
            className="modal fade"
            id={`exampleModal${selectedItemDetails.id}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {selectedItemDetails.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        {selectedItemDetails.image.map((img, index) => (
                          <div key={index}>
                            <img src={img} alt={`Image ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                      <div className="col-md-4">
                        <div>
                          {selectedItemDetails.children}
                          <a href={selectedItemDetails.link}></a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
