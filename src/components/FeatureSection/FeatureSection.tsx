import FeatureCard from "../FeatureCard/FeatureCard";
import FeatureSectionStyles from "./FeatureSection.module.css";

type FeatureSectionProps = {
  sectionBgColor: string;
  sectionShadow: string;
  title: string;
  titleColor: string;
  features: {
    icon: string;
    title: string;
    details: string;
    titleColor: string;
    borderColor: string;
  }[];
};

const FeatureSection: React.FC<FeatureSectionProps> = (props) => {
  const { sectionBgColor, sectionShadow, title, titleColor, features } = props;

  return (
    <>
      <div
        className={FeatureSectionStyles["component-wrapper"]}
        style={{
          backgroundColor: sectionBgColor,
          boxShadow: sectionShadow,
        }}
      >
        <div className="container p-0">
          <div className="mb-4 text-center">
            <h2 className="fw-bold" style={{ color: titleColor }}>
              {title}
            </h2>
          </div>

          <div className="container">
            <div className="row">
              {features.map((_v, _i) => {
                return (
                  <div
                    key={_i}
                    className={`col-md-3 col-6
                  ${FeatureSectionStyles["card-column"]}
                  `}
                  >
                    <FeatureCard {..._v} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
