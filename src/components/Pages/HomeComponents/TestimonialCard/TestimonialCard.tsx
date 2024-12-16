import Image from "next/image";
import TestimonialCardStyles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  content: string;
  authorAvatar: string;
  authorName: string;
  authorDesignation: string;
  schoolLogo: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  const { content, authorAvatar, authorName, authorDesignation, schoolLogo } =
    props;
  return (
    <>
      <div
        className={`container p-4 bg-white rounded-4
        ${TestimonialCardStyles["testimonial-card"]}
        `}
      >
        <div
          className={`container ${TestimonialCardStyles["author-container"]}`}
        >
          <div className="d-flex gap-3 mb-4">
            <Image src={authorAvatar} alt="author-avatar" className="img-fluid" />
            <div className="container">
              <p className="fs-16 fw-bold text-primary m-0">{authorName}</p>
              <span className="fs-16 text-success">{authorDesignation}</span>
            </div>
          </div>
        </div>

        <div className={`${TestimonialCardStyles["content-container"]}`}>
          <p className="fs-16">{content}</p>
        </div>

        <div className="position-absolute bottom-0 end-0 pb-3 pe-3">
          <Image
            src={schoolLogo}
            alt="school-logo"
            className={TestimonialCardStyles["school-logo"]}
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
