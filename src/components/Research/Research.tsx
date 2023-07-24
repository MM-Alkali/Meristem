import React, { useEffect } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { HiSupport } from 'react-icons/hi';
import './Research.css';
import ResearchNavBar from './ResearchNavBar';
import ResearchFooter from './ResearchFooter';
import Aos, { AosOptions } from 'aos';
import "aos/dist/aos.css";


const Research: React.FC = () => {

  useEffect(() => {
    const options: AosOptions = {
      duration: 3000,
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    Aos.init(options);
  }, []);

  return (
    <div>
    <ResearchNavBar />
      <div className="carousel">
                  <div className="row">
                      <h1 className="hestia-title">A Wobbly upturn</h1>
                      <span className="sub-title">
                        Meristem Halfyear Outlook(2021)
                      </span>
                      <div className="buttons">
                        <a
                          href="https://research.meristemng.com/wp-content/uploads/2021/08/Meristem-Research-Half-Year-Outlook-A-Wobbly-Upturn...pdf"
                          title="Get Report"
                          className="btn btn-primary btn-left"
                        >
                          Get Report
                        </a>
                      </div>
                    </div>
                  </div>
                <div className="header-filter" />
      <div className="main">
        <section className="hestia-features">
                  <div className="hestia-info" data-aos="fade-up" >
                    <a href="https://research.meristemng.com/reports">
                      <div className="icon">
                        <FaFileAlt />
                      </div>
                      <h4 className="info-title">Reports</h4>
                    </a>
                  </div>
                  <div className="hestia-info" data-aos="fade-down" >
                    <a href="https://research.meristemng.com/trainings">
                      <div className="icon">
                        <HiSupport />
                      </div>
                      <h4 className="info-title">Trainings</h4>
                    </a>
                  </div>
        </section>
      </div>
        <ResearchFooter />
    </div>
  );
};

export default Research;
