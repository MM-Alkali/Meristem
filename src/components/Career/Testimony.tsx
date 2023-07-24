import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimony.css";

const Testimony: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="wrapper" data-aos="fade-up">
      <div className="testimony">
        <Slider {...settings}>
          <div className="slide1">
            <div className="rowdown">
              <div className="slide-content">
                <h5 className="emp-head">Hear from Meristem employees</h5>
                <section>
                  <p className="emp-writeUp">
                    Meristem is a wonderful place for career development and my
                    experience so far has been amazing. I sincerely appreciate
                    the opportunity to explore this field of work within this
                    sphere.
                    <br />
                    One of the amazing things about the organization is its core
                    value which centers on clientocracy and esprit de corps;
                    have learned that client priorities come first and that
                    teamwork is essential in achieving a common task. I have
                    also learned how to work with people irrespective of their
                    personal differences. Another key value is ownership and I
                    have learned to imbibe these qualities in every job task.
                  </p>
                </section>
                <section>
                  <p>
                    <strong>-Damilare Shobambo</strong>
                  </p>
                  <p className="mt-2">Intern</p>
                </section>
              </div>
              <div
                className="slide-image"
                style={{
                  backgroundImage:
                    "url(https://careers.meristemng.com/testimonal_folder//1581059658Damilare.jfif)",
                }}
              ></div>
            </div>
          </div>

          <div className="slide2">
            <div className="rowdown">
              <div className="slide-content">
                <h5
                  className="emp-head"
                  style={{
                    position: "relative",
                    top: "-72px",
                    ...(window.innerWidth <= 768 && { top: "0" }), // Apply the style for screens with max-width of 768px
                  }}
                >
                  Hear from Meristem employees
                </h5>
                <section>
                  <p
                    className="emp-writeUp"
                    style={{
                        position: "relative",
                        top: "-50px",
                        ...(window.innerWidth <= 768 && { top: "0" }), // Apply the style for screens with max-width of 768px
                      }}
                  >
                    Working in Meristem has been such a wonderful experience. I
                    have learnt so much,
                    <br />
                    done so much and wouldn't trade the experience for anything
                    else!
                  </p>
                </section>
                <section>
                  <p>
                    <strong>-Oise Ajayi</strong>
                  </p>
                  <p className="mt-2">Intern</p>
                </section>
              </div>
              <div
                className="slide-image"
                style={{
                  backgroundImage:
                    "url(https://careers.meristemng.com/testimonal_folder//1581059568Oise.jfif)",
                }}
              ></div>
            </div>
          </div>

          <div className="slide3">
            <div className="rowdown">
              <div className="slide-content">
                <h5 className="emp-head">Hear from Meristem employees</h5>
                <section>
                  <p className="emp-writeUp">
                    It is an amazing opportunity to be a Meristar.
                    <br />
                    Meristem has given me the opportunity to grow and develop
                    myself professionally over the years. I am grateful to be a
                    part of this brilliant team that recognizes the best of my
                    abilities with a culture of clientocracy, esprit de corps,
                    professionalism, and integrity, Einstein are qualities that
                    exude from the top and flow throughout the rest of the
                    organization.
                    <br />
                    We do not work hard in Meristem, we work smart.
                    <br />
                    Indeed, my Meristem is truly a trove of treasure.
                  </p>
                </section>
                <section>
                  <p>
                    <strong>-Omowunmi Adeleye</strong>
                  </p>
                  <p className="mt-2">Customer Relationship Officer</p>
                </section>
              </div>
              <div
                className="slide-image"
                style={{
                  backgroundImage:
                    "url(https://careers.meristemng.com/testimonal_folder//1581335497Wunmi.jfif)",
                }}
              ></div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flower">
        <img src="https://careers.meristemng.com/img/leaf.png" />
      </div>
    </div>
  );
};

export default Testimony;
