import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export type CarrousselDirection = "left" | "right";

export interface ButtonsCarrousselProps {
  direction: CarrousselDirection;
  onClick: (direction: CarrousselDirection) => void;

  color?: string;
  size?: number;
  background?: string;
  className?: string;
}

export const ButtonsCarroussel: React.FC<ButtonsCarrousselProps> = ({
  direction,
  onClick,
  color = "#fff",
  size = 20,
  background = "rgba(0,0,0,0.6)",
  className = ""
}) => {
  const Icon = direction === "left" ? FaArrowLeft : FaArrowRight;

  return (
    <button
      type="button"
      className={`carousel-btn ${direction} ${className}`}
      onClick={() => onClick(direction)}
      aria-label={direction === "left" ? "Projet précédent" : "Projet suivant"}
      style={{ background }}
    >
      <Icon size={size} color={color} />
    </button>
  );
};