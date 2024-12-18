import Carousel from "react-spring-3d-carousel";
import Image from "next/image";
import {
  VideoThumbnail_1,
  VideoThumbnail_2,
  VideoThumbnail_3,
  VideoThumbnail_4,
  VideoThumbnail_5,
  VideoThumbnail_6,
  VideoThumbnail_7,
  VideoThumbnail_8,
  VideoThumbnail_9,
  WhatOurCustomersSayHero,
} from "../../../../config/assets";
import { getStringInUserLanguage } from "../../../../content/lang";
import WhatOurCustomersSayStyles from "./WhatOurCustomersSay.module.css";
import { useEffect, useState } from "react";
import { config } from "react-spring";

const WhatOurCustomersSay = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [carouselState, setCarouselState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.slow,
  });

  const urls = [
    {
      key: 1,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid005.mp4",
    },
    {
      key: 2,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid006.mp4",
    },
    {
      key: 3,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid004.mp4",
    },
    {
      key: 4,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid008.mp4",
    },
    {
      key: 5,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid009.mp4",
    },
    {
      key: 6,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid007.mp4",
    },
    {
      key: 7,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid001.mp4",
    },
    {
      key: 8,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid003.mp4",
    },
    {
      key: 9,
      url: "https://edufin-marketing.s3.ap-south-1.amazonaws.com/video/website/testVid002.mp4",
    },
  ];

  const slides = [
    {
      key: 1,
      content: <Image src={VideoThumbnail_1} alt="video-thumbnail-1" />,
    },
    {
      key: 2,
      content: <Image src={VideoThumbnail_2} alt="video-thumbnail-2" />,
    },
    {
      key: 3,
      content: <Image src={VideoThumbnail_3} alt="video-thumbnail-3" />,
    },
    {
      key: 4,
      content: <Image src={VideoThumbnail_4} alt="video-thumbnail-4" />,
    },
    {
      key: 5,
      content: <Image src={VideoThumbnail_5} alt="video-thumbnail-5" />,
    },
    {
      key: 6,
      content: <Image src={VideoThumbnail_6} alt="video-thumbnail-6" />,
    },
    {
      key: 7,
      content: <Image src={VideoThumbnail_7} alt="video-thumbnail-7" />,
    },
    {
      key: 8,
      content: <Image src={VideoThumbnail_8} alt="video-thumbnail-8" />,
    },
    {
      key: 9,
      content: <Image src={VideoThumbnail_9} alt="video-thumbnail-9" />,
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        setCarouselState((prevState) => ({
          ...prevState,
          goToSlide: index,
        }));

        if (index === carouselState.goToSlide) {
          setShowOverlay(true);
          setVideoUrl(urls[index].url);
        }
      },
    };
  });

  useEffect(() => {
    // Set up the interval to update goToSlide every 2 seconds
    const intervalId = setInterval(() => {
      setCarouselState((prevState) => {
        return {
          ...prevState,
          goToSlide: (prevState.goToSlide + 1) % slides.length,
        };
      });
    }, 3000); // 3 seconds

    // Clear the interval when the component is unmounted or cleaned up
    return () => clearInterval(intervalId);
  }, [slides.length]); // Empty dependency array ensures this runs only once on mount and cleanup on unmount

  return (
    <>
      <div className={WhatOurCustomersSayStyles["component-wrapper"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <Image
                  src={WhatOurCustomersSayHero}
                  alt="what-our-customers-say-hero"
                  className={WhatOurCustomersSayStyles["doodle-image"]}
                />
                <div className="d-flex flex-column align-items-start">
                  <div className="container my-4">
                    <h1 className="fw-bold fs-sm-20 text-primary">
                      {getStringInUserLanguage(
                        "WHAT_OUR_CUSTOMERS_SAY_HEADING"
                      )}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {
              <div
                className={`${WhatOurCustomersSayStyles["video-player-overlay"]}
                  ${showOverlay ? "d-block" : "d-none"}
                  `}
              >
                <div className="container-fluid h-100 w-100 position-relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowOverlay(false);
                    }}
                    className={`btn btn-lg btn-secondary position-absolue ${WhatOurCustomersSayStyles["close-btn"]}`}
                  >
                    <span className="h1 fs-sm-20">&times;</span>
                  </button>

                  <div
                    className={`${WhatOurCustomersSayStyles["player-container"]}`}
                  >
                    {showOverlay && videoUrl && (
                      <video
                        src={videoUrl}
                        preload="none"
                        autoPlay
                        controls
                        width="100%"
                        height="100%"
                        className={`${WhatOurCustomersSayStyles["video"]}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            }
            <div
              className={`col-md-6 ${WhatOurCustomersSayStyles["carousel-column"]}`}
            >
              <div
                className={`${WhatOurCustomersSayStyles["carousel-wrapper"]}`}
              >
                <Carousel
                  slides={slides}
                  goToSlide={carouselState.goToSlide}
                  offsetRadius={carouselState.offsetRadius}
                  showNavigation={carouselState.showNavigation}
                  animationConfig={carouselState.config}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatOurCustomersSay;
