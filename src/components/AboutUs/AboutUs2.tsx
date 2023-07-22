// import React from 'react';
import "./AboutUs2.css";

const AboutUs = () => {
  // const handleButtonClick = (componentId: any) => {
  //   const component = document.getElementById(componentId);
  //   if (component) {
  //     window.scrollTo({
  //       top: component.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
<div className="about-us-2">

      <div className="content">
        <div className="info">
          <p>
            For over 20 years, we have innovated, grown and attained the status
            of the preferred financial services provider for individuals and
            corporations in Nigeria and across the world, through a rich history
            of excellent customer service, demonstrated financial services
            expertise, combined with an enviable workplace culture of
            thoroughbred professionals. This has kept us true to our founding
            promise "Let’s grow wealth for you".
          </p>
          <p>
            We are a capital market conglomerate that provides a plethora of
            distinct financial services through a range of products in wealth
            management, stockbroking, financial advisory, trusteeship,
            registrars and probate management services, investment banking,
            lease, and loans. With these offerings, we have continued to fulfill
            our promise of wealth creation, preservation, and transfer for all
            clients.
          </p>
        </div>
        <div className="video">
          <div className="video-container">
            <iframe
              width="450"
              height="275"
              src="https://www.youtube.com/embed/JSqeTr1ypcU"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
          <h3 className="two-h3">"The CEPOEM ideology defines our very existence."</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
