import FancyCardStyles from "./FancyCard.module.css";

type FancyCardProps = {
  bgImage: string;
  background: string;
  doodleImage: string;
  title: string;
  onClick: () => void;
};

const FancyCard: React.FC<FancyCardProps> = (props) => {
  const { bgImage, background, doodleImage, title, onClick } = props;

  return (
    <div
      className={`container p-4 rounded-4
            ${FancyCardStyles["card"]}
        `}
      role="button"
      style={{
        background: `${background} url(${bgImage})`,
      }}
      onClick={onClick}
    >
      <div
        className={`d-flex gap-3 align-items-center
            ${FancyCardStyles["content"]}
        `}
      >
        <h3 className="fw-bold fs-sm-18 text-white p-3">{title}</h3>
        <img src={doodleImage} alt="doodle-image" className="mt-5" />
      </div>
    </div>
  );
};

export default FancyCard;
