import React from "react";
import Image from "next/image";
import { BackIconDark, BackIconLight } from "../../config/assets";
import BackButtonStyles from "./BackButton.module.css";

type BackButtonProps = {
  type: "dark" | "light";
  onClick: () => void;
};

const BackButton: React.FC<BackButtonProps> = (props) => {
  const { type, onClick } = props;
  return (
    <>
      <div
        className={`${BackButtonStyles["component-wrapper"]} ${BackButtonStyles[type]}`}
      >
        <div
          className={`container rounded-circle bg-${type} shadow-lg text-center
            ${type === "dark" ? "p-2" : "p-3"}
          `}
          role="button"
          onClick={onClick}
        >
          <Image
            src={type === "dark" ? BackIconLight : BackIconDark}
            alt="back-button"
            className={`${BackButtonStyles["icon"]}`}
          />
        </div>
      </div>
    </>
  );
};

export default BackButton;
