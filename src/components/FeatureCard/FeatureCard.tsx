import FeatureCardStyles from "./FeatureCard.module.css";

type FeatureCardProps = {
  icon: string;
  title: string;
  details: string;
  titleColor: string;
  borderColor: string;
};

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { icon, title, details, titleColor, borderColor } = props;

  return (
    <>
      <div
        className={`container bg-white p-4 rounded-5
        ${FeatureCardStyles["component-wrapper"]}
        `}
        style={{ borderColor: borderColor }}
      >
        <div className="my-4">
          <img
            src={icon}
            alt="feature-icon"
            className={FeatureCardStyles["doodle-image"]}
          />
        </div>

        <h4 className="fw-bold" style={{ color: titleColor }}>
          {title}
        </h4>
        <div className={`${FeatureCardStyles["details-container"]}`}>
          <span className="fs-16">{details}</span>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
