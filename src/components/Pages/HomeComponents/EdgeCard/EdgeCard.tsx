import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import Image from "next/image";
import { getStringInUserLanguage } from "../../../../content/lang";
import EdgeCardStyles from "./EdgeCard.module.css";

type EdgeCardProps = {
  title: string;
  contentPara1: string;
  contentPara2: string;
  ctaLink: string;
  heroImage: string;
};

const EdgeCard: React.FC<EdgeCardProps> = (props) => {
  const router = useRouter(); // Use Next.js router
  const { title, contentPara1, contentPara2, ctaLink, heroImage } = props;

  const handleCtaLinkClick = () => {
    router.push(ctaLink); // Navigate to the link using Next.js
  };

  return (
    <div
      className={`container p-md-4 p-3 bg-white rounded-4 mb-1 mb-md-4
        position-relative
        ${EdgeCardStyles["component-wrapper"]}
      `}
    >
      <Image
        src={heroImage}
        alt="hero-image"
        className={EdgeCardStyles["hero-image"]}
        width={500} // Provide width and height for Next.js Image
        height={300} // Adjust dimensions as needed
      />
      <h4 className="fs-sm-16 text-primary fw-bold mt-3">{title}</h4>

      <div className={`${EdgeCardStyles["content-para-container"]}`}>
        <p className="fs-16 fs-sm-16">{contentPara1}</p>
        <p className="fs-16 fs-sm-16 d-none d-md-block">{contentPara2}</p>
      </div>

      <div className={EdgeCardStyles["know-more-container"]}>
        <span
          className={`fs-16 text-decoration-underline
          ${EdgeCardStyles["cta-link"]}
          `}
          onClick={handleCtaLinkClick}
        >
          {getStringInUserLanguage("KNOW_MORE")}
        </span>
      </div>
    </div>
  );
};

export default EdgeCard;
