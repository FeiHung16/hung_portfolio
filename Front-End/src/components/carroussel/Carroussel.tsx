import React, { useState, useEffect } from "react";
import { projects } from "../../data/DataProject";
import { ButtonsCarroussel } from "../utils/buttons/ButtonsCarroussel";
import "./carroussel.scss";


export const Carroussel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projects.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [total]);

  const handleNavigate = (direction: "left" | "right") => {
    setCurrentIndex((prev) =>
      direction === "left"
        ? prev === 0 ? total - 1 : prev - 1
        : (prev + 1) % total
    );
  };

  const project = projects[currentIndex];

  return (
    <section className="carroussel">
      <ButtonsCarroussel
        direction="left"
        onClick={handleNavigate}
      />

      <ButtonsCarroussel
        direction="right"
        onClick={handleNavigate}
      />

      <div className="slide">
        <div className="imgWrapper">
        <img src={project.cover} alt="" />
        </div>
        <div className="content">
          <h2 className="text-softlinen">{project.title}</h2>
          <p className="text-softlinen">{project.description}</p>
        </div>
      </div>


    </section>
  );
};