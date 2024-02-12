import React, { useEffect, useState } from "react";
import { portfoliodata } from "../../data/data";
import "../portfolio/portfolio.css";
import Model from "../model/Model";

const Portfolio = () => {
  const [model, setModel] = useState(false);
  const [tempData, setTempdata] = useState([]);

  const getData = (title, content, link, images) => {
    let tempData = [title, content, link, images];
    setTempdata((item) => [1, ...tempData]);
    return setModel(true);
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflowY = model ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflowY = "auto"; // Reset overflowY when component unmounts
    };
  }, [model]);

  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {portfoliodata.map((item) => {
            return (
              <article key={item.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio__item-cta">
                  <button
                    className="btn"
                    onClick={() =>
                      getData(item.title, item.content, item.link, item.images)
                    }
                  >
                    Details
                  </button>
                  {item.link && (
                    <a
                      href={item.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      {model === true ? (
        <Model
          title={tempData[1]}
          content={tempData[2]}
          link={tempData[3]}
          images={tempData[4]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Portfolio;
