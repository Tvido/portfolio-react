import { useState } from "react";
import { motion } from "framer-motion";

import { AiOutlinePlayCircle, AiOutlineGithub } from "react-icons/ai";

import "./portfolio.css";
import filterData from "./filterData";
import portfolioData from "./portfolioData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {};

  return (
    <section id="portfolio">
      <h2>Some Portfolio</h2>

      <div className="porfolio__filter">
        {filterData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleWorkFilter(item)}
            className={`porfolio__filter-item ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.8, delayChildren: 0.8 }}
        className="portfolio__list"
      >
        {portfolioData.map((item) => (
          <div key={item.id} className="portfolio__list-item">
            <div className="portfolio__list-img">
              <img src={item.picture} alt={item.title} title={item.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerDirection: 0.5,
                }}
                className="portfolio__list-icons"
              >
                <a href={item.demoLink}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.95] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiOutlinePlayCircle />
                  </motion.div>
                </a>

                <a href={item.codeLink}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.95] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiOutlineGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="portfolio__list-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="portfolio__list-type">
                <p>{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
