import { useState } from "react";
import "./AboutUs3.css";
import image1 from "../../images/01.jpeg";
import image2 from "../../images/02.jpeg";
import image3 from "../../images/03.png";
import image4 from "../../images/04.jpeg";
import image5 from "../../images/05.jpeg";
import image6 from "../../images/06.jpeg";
import image7 from "../../images/07.jpeg";
import image8 from "../../images/08.png";
import image9 from "../../images/09.png";

const BoardMembers = () => {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    setActiveMember(index === activeMember ? null : index);
  };

  const topRowMembers = boardMembers.slice(0, 3);
  const middleRowMembers = boardMembers.slice(3, 7);
  const bottomRowMembers = boardMembers.slice(7);

  return (
    <div className="board">
      <h1>Our Board</h1>
      <div className="row row-top">
        {/* First three board members */}
        {topRowMembers.map((boardMember, index) => (
          <div
            className={`board-member ${index === activeMember ? "active" : ""}`}
            key={index}
            onClick={() => handleMemberClick(index)}
          >
            <img src={boardMember.image} alt="Board Member" />
            <div className="title">
              <h5>{boardMember.name}</h5>
              {boardMember.roles.map((role, i) => (
                <h6 key={i}>{role}</h6>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="row row-middle">
        {/* Next four board members */}
        {middleRowMembers.map((boardMember, index) => (
          <div
            className={`board-member ${index + 3 === activeMember ? "active" : ""}`}
            key={index}
            onClick={() => handleMemberClick(index + 3)}
          >
            <img src={boardMember.image} alt="Board Member" />
            <div className="title">
              <h5>{boardMember.name}</h5>
              {boardMember.roles.map((role, i) => (
                <h6 key={i}>{role}</h6>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="row row-bottom">
        {/* Last two board members */}
        {bottomRowMembers.map((boardMember, index) => (
          <div
            className={`board-member ${index + 7 === activeMember ? "active" : ""}`}
            key={index}
            onClick={() => handleMemberClick(index + 7)}
          >
            <img src={boardMember.image} alt="Board Member" />
            <div className="title">
              <h5>{boardMember.name}</h5>
              {boardMember.roles.map((role, i) => (
                <h6 key={i}>{role}</h6>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add modal backdrop */}
      {activeMember !== null && (
        <div className="modal-backdrop" onClick={() => setActiveMember(null)}></div>
      )}

      {/* Add modal content */}
      {activeMember !== null && (
        <div className="modal-content">
          <div className="title">
            <h5>{boardMembers[activeMember].name}</h5>
            {boardMembers[activeMember].roles.map((role, i) => (
              <h6 key={i}>{role}</h6>
            ))}
          </div>
          <div className="hidden-content">
            <p>{boardMembers[activeMember].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardMembers;

const boardMembers = [
  {
    name: "AVM, ISHAYA SHEKARRI (RTD.), OON, MNI",
    roles: [
      "CHAIRMAN, MERISTEM SECURITIES LIMITED",
      "CHAIRMAN, CAPITAL",
      "DIRECTOR, REGISTRARS AND PROBATE SERVICES",
    ],
    image: image1,
    description:
      "Ishaya Shekarri served with the Nigerian Air Force where he held various senior staff and command appointments. He was also the Military Administrator of Kano State and a one-time Minister of Special Duties of the Federal Republic of Nigeria. He was also Chairman of Lion Bank of Nigeria Plc. He is also on the Board of other companies including, Diamond Bank Plc, Integrated Diaries Limited, and Grand Cereals and Oil Mills Ltd.",
  },
  {
    name: "OLUSEGUN OLUSANYA",
    roles: [
      "VICE CHAIRMAN, MERISTEM SECURITIES LIMITED",
      "CHAIRMAN, STOCKBROKERS",
      "VICE CHAIRMAN, CAPITAL",
    ],
    image: image2,
    description:
      "Olusegun Olusanya is the Vice Chairman of Meristem Securities Limited and Meristem Capital Limited. He also sits on the board as the Vice Chairman of Meristem Stockbrokers Limited. He is an accomplished public official, banker, and businessman. He held various top management positions in the banking industry. He was an Executive Director of Union Bank of Nigeria Plc., Afribank Nigeria Plc, and a host of other banks. He is currently on the Board of several companies, including Union Bank of Nigeria and Dangote Cement Plc.",
  },
  {
    name: "CHIEF MICHAEL ADE.OJO, OON",
    roles: [
      "CHAIRMAN, WEALTH MANAGEMENT",
      "DIRECTOR, MERISTEM SECURITIES LIMITED",
      "DIRECTOR, MERISTEM CAPITAL",
      "DIRECTOR, TRUSTEES",
    ],
    image: image3,
    description:
      "Chief Michael Ade-Ojo is the Chairman of Meristem Wealth Management and a Non-Executive Director of Meristem Securities Limited. He also sits on the board and as director of the Meristem Capital and Meristem Trustees respectively. Chief Michael Ade-Ojo is a successful entrepreneur, businessman, and Philanthropist of repute. He is the Founder and Chairman of Elizade Group of Companies comprising, Elizade Nigeria Limited, and Crown Drinks Limited amongst others. He has also sat on the board of several companies including Custodian & Allied Insurance Plc, FCMB Plc, ECOBANK Plc, Toyota Nigeria Limited, and Moore House Sofitel Company Limited.",
  },
  {
    name: "CHIEF SYLVERIUS I. C. OKOLI",
    roles: [
      "DIRECTOR, TRUSTEES",
      "DIRECTOR, CAPITAL",
      "CHAIRMAN, REGISTRARS AND PROBATE SERVICES",
      "NON-EXECUTIVE DIRECTOR, MERISTEM SECURITIES LIMITED",
    ],
    image: image4,
    description:
      "S.I.C Okoli is the Chairman of Meristem Registrars and Probate Services, he is also a Non-Executive Director of Meristem Securities Ltd and a director in the Meristem Capital and Meristem Trustees subsidiaries respectively. He has held various top management positions in the Oil sector and also a former Director of a number of Shell companies in Africa. He was Managing Director of Shell Sierra Leone and National Oil & Chemical Marketing Plc (now Conoil Plc) and is currently the Executive Chairman of West Africa Bitumen Emulsion Co. Limited (WABECO) and Safecon Sierra Leone Limited.",
  },
  {
    name: "LAITAN ONOLAJA, OFR",
    roles: [
      "NON-EXECUTIVE DIRECTOR, MERISTEM SECURITIES LIMITED",
      "DIRECTOR, CAPITAL",
      "DIRECTOR, REGISTRARS AND PROBATE SERVICES",
    ],
    image: image5,
    description:
      "Laitan Onalaja, OFR is a Non-Executive Director of Meristem Securities Limited and a Director of the Meristem Capital and Meristem Registrars and Probate Services Respectively. He trained and practiced as a Chartered Engineer and serving in various appointments in the Federal Civil Service before his voluntary retirement. He is the Managing Director of Supreme Savings & Loans Ltd. and on the Board of many companies, including Nigeria Westminster Dredging and Marine Limited.",
  },
  {
    name: "YAKUBU ABUBAKAR",
    roles: [
      "NON-EXECUTIVE DIRECTOR, MERISTEM SECURITIES LIMITED",
      "DIRECTOR, STOCKBROKERS",
    ],
    image: image6,
    description:
      "Yakubu Abubakar is a Non-Executive Director of Meristem Securities Limited and a Director of Meristem Stockbrokers. He is an accomplished businessman with vast experience in Sales and Marketing. He currently serves as the Sales and Marketing Manager of Imurat International Limited, which he represents on the Board of Meristem Securities Limited and on the board of Meristem Stockbrokers Limited.",
  },
  {
    name: "CHRISTOPHER ATTAH",
    roles: [
      "NON-EXECUTIVE DIRECTOR, MERISTEM SECURITIES LIMITED",
      "DIRECTOR, CAPITAL",
      "DIRECTOR, TRUSTEES",
    ],
    image: image7,
    description:
      "Christopher Attah is a Non-Executive Director of Meristem Securities Limited and serves as Director of Meristem Capital and Meristem Trustees subsidiaries respectively. Christopher Attah is a legal practitioner with cognate experience in Corporate and Commercial Law practice. He is also a Director of several other companies, including Alvit Farms Limited.",
  },
  {
    name: "OLUWOLE ABEGUNDE",
    roles: ["GROUP MANAGING DIRECTOR"],
    image: image8,
    description:
      "Oluwole Abegunde is the Group Managing Director of Meristem Securities Limited, responsible for providing overall leadership and strategy for the entire organization. Wole has varied experience in manufacturing, banking, and the capital market. He has held positions in Brand Management, Credit Appraisal, Fund Management, Stock Broking, and Capital Issues. He was General Manager of Investment Centre Limited, a subsidiary of Broad Bank Limited, and worked with NAL Bank Plc from where he joined Meristem Securities Limited. He holds an MBA from the University of Ilorin and is a fellow of the Chartered Institute of Stockbrokers (FCS). He is also an Authorized Dealing Clerk of The Nigerian Stock Exchange.",
  },
  {
    name: "SULAIMAN ADEDOKUN, CFA",
    roles: ["DEPUTY GROUP MANAGING DIRECTOR"],
    image: image9,
    description:
      "Sulaiman Adedokun is the Deputy Managing Director of Meristem Securities Limited and the Managing Director of Meristem Wealth Management. Sulaiman started his career with Security Swaps Limited and later Nigerian Stockbrokers Limited (a subsidiary of NAL Bank Plc.) from where he joined Meristem Securities Limited. He pioneered the establishment of Meristem Wealth Management Ltd, a wholly owned subsidiary of Meristem Securities Ltd, and currently manages the Wealth Management Firm. Sulaiman is a CFA chartered holder, a member of the CFA Institute and society of Nigeria, as well as a seasoned accountant with a wealth of experience spanning across the various sectors of the capital market.",
  },
];
