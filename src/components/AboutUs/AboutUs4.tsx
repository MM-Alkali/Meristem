import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./AboutUs4.css";
import awardImage1 from "../../images/Hero.jpeg";

const OurAwards = () => {
  return (
    <div className="awards">
      <h1>Awards</h1>
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={3000}
        stopOnHover
        showThumbs={false}
        swipeable
      >
        <div className="carousel-slide">
          <div className="card">
            <img src={awardImage1} alt="Award Logo" />
            <h3 className="award-title">First Digital Broker of the Year</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="card">
            <img src={awardImage1} alt="Award Logo" />
            <h3 className="award-title">First Online Trading Platform</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="card">
            <img src={awardImage1} alt="Award Logo" />
            <h3 className="award-title">Stockbroker of the Year</h3>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="card">
            <img src={awardImage1} alt="Award Logo" />
            <h3 className="award-title">
              Best Overall Forecaster (Nigeria)
            </h3>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="card">
            <img src={awardImage1} alt="Award Logo" />
            <h3 className="award-title">
              No.1 GDP Forecaster (Nigeria)
            </h3>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="card">
            <img src={awardImage1} alt="Award Logo" />
            <h3 className="award-title">
              No.1 Exchange Rate Forecaster (Nigeria)
            </h3>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="card">
            <img src={awardImage1} alt="Award Logo" />
            <h3 className="award-title">
              First Asset Management firm to become GIPS compliant
            </h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default OurAwards;
