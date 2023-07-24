/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Career.css";
import CareerNav from "./CareerNav";
import Footer from "./Footer";
import Testimony from "./Testimony";
import Aos, { AosOptions } from 'aos';
import "aos/dist/aos.css";



const Career: React.FC = () => {
  const texts = ["DARING?", "EXTRAORDINARY?", "INTUITIVE?"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");


  useEffect(() => {
    const options: AosOptions = {
      duration: 3000,
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    Aos.init(options);
  }, []);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setTypedText(text.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval); // Clear the interval when the component unmounts
    };
  }, [currentTextIndex]);

  return (
    <div className="bigWrapper">
      <CareerNav />

      <div className="landing-display">
        <section className="section1" data-aos="fade-left">
          <h1>
            <span className="typed">
              <span className="small-font">ARE YOU </span>
              {typedText}
            </span>
            <br />
          </h1>
          <p>Create the future you want</p>
        </section>
        <form className="typeahead" role="search">
          <div className="display-search">
            <input
              type="text"
              className="search-input"
              placeholder="Search jobs"
              name="name"
              autoComplete="off"
            />
          </div>
        </form>
      </div>

      <div className="below-landing">
        <div className="col1" data-aos="fade-up">
          <h1>Students and recent Graduates</h1>
          <p />
          <p>
            As a fresh graduate, your foundational experience always plays a key
            role in the future of your career. At Meristem, the entirety of our
            essence is embedded in GROWTH. We make it a priority to provide
            growth for great minds like yours, who are committed to improving
            the world. We open our doors to you to ensure you are equipped with
            the right and necessary steps for the successful career you desire.
          </p>
          <p>Click below if you currently have 0-2 years work experience.</p>{" "}
          <p />
          <a href="https://careers.meristemng.com/job-list/student-graduates">
            <button className="btn" type="button">
              Explore opportunities
            </button>
          </a>
        </div>
        <div className="col2" data-aos="fade-right">
          <h1>Experienced Professionals</h1>
          <p className="font-13" />
          <p>
            Meristem is committed to providing ways for employees to learn and
            grow at every stage of their careers. As an experienced hire in our
            team, we offer you a dynamic environment that welcomes your wealth
            of knowledge and ensures you never stop learning and growing as an
            individual.
          </p>
          <p>
            Click below if you&nbsp;currently have 2 years+ work experience.
          </p>
          <p />
          <a href="https://careers.meristemng.com/job-list/professional">
            <button className="btn" type="button">
              Explore opportunities
            </button>
          </a>
        </div>
      </div>

      <div className="below-landing2">
        <div className="rowed">
          <div className="order1">
            <img
              className="img-fluid"
              src="https://careers.meristemng.com/img/image%202.png"
              alt="Illustration"
            />
          </div>
          <div className="order2">
            <h1>Unsolicited Applications</h1>
            <p />
            <p>Your skills not advertised yet? Fill this form and we will get back to you!</p>
            <p />
            <a href="https://careers.meristemng.com/unsolicited-application">
              <button className="btn-row" type="button">
                Submit your resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <Testimony />

      <Footer />
    </div>
  );
};

export default Career;
