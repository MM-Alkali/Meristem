import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./CoreValues.css";

const CoreValues = () => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const toggleDropdown = (index: number) => {
    if (currentIndex === index) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(index);
    }
  };

  const toggleModal = (String: string) => {
    setModalVisible(!modalVisible);
    setCurrentIndex(-1);
    if (String === "Our Board") {
      setActiveDropdown(0);
    } else if (String === "Our Leadership") {
      setActiveDropdown(1);
    } else if (String === "Our Vision") {
      setActiveDropdown(2);
    } else if (String === "Our Mission") {
      setActiveDropdown(3);
    } else if (String === "Our Philosophy") {
      setActiveDropdown(4);
    } else if (String === "Our Brand") {
      setActiveDropdown(5);
    } else if (String === "Brand Promise") {
      setActiveDropdown(6);
    } else if (String === "Subsidiary1") {
      setActiveDropdown(7);
    } else if (String === "Subsidiary2") {
      setActiveDropdown(8);
    } else if (String === "Subsidiary3") {
      setActiveDropdown(9);
    } else if (String === "Subsidiary4") {
      setActiveDropdown(10);
    } else if (String === "Subsidiary5") {
      setActiveDropdown(11);
    } else if (String === "Subsidiary6") {
      setActiveDropdown(12);
    } else {
      setActiveDropdown(-1);
    }
  };

  return (
    <div className="about-buttons">
      <div className="about-button">
        <button id="button-0" onClick={() => toggleDropdown(0)}>
          Our Leadership
        </button>
        {currentIndex === 0 && (
          <div className="dropdown-content-buttons">
            <button onClick={() => toggleModal("Our Board")}>Our Board</button>
            <button onClick={() => toggleModal("Our Leadership")}>
              Our Leadership
            </button>
          </div>
        )}
      </div>

      <div className="about-button">
        <button id="button-1" onClick={() => toggleDropdown(1)}>
          Core Values
        </button>
        {currentIndex === 1 && (
          <div className="dropdown-content-buttons">
            <button onClick={() => toggleModal("Our Vision")}>
              Our Vision
            </button>
            <button onClick={() => toggleModal("Our Mission")}>
              Our Mission
            </button>
            <button onClick={() => toggleModal("Our Philosophy")}>
              Our Philosophy
            </button>
            <button onClick={() => toggleModal("Our Brand")}>Our Brand</button>
            <button onClick={() => toggleModal("Brand Promise")}>
              Brand Promise
            </button>
          </div>
        )}
      </div>

      <div className="about-button">
        <button id="button-2" onClick={() => toggleDropdown(2)}>
          Subsidiaries
        </button>
        {currentIndex === 2 && (
          <div className="dropdown-content-buttons">
            <button onClick={() => toggleModal("Subsidiary1")}>
              Meristem Wealth Management
            </button>
            <button onClick={() => toggleModal("Subsidiary2")}>
              Meristem Securities Trading
            </button>
            <button onClick={() => toggleModal("Subsidiary3")}>
              Meristem Investment Banking
            </button>
            <button onClick={() => toggleModal("Subsidiary4")}>
              Meristem Registrar Services
            </button>
            <button onClick={() => toggleModal("Subsidiary5")}>
              Meristem Trustee Services
            </button>
            <button onClick={() => toggleModal("Subsidiary6")}>
              Meristem Loans and Leasing
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal-container">
          <div className="modal">
            <div className="close-button">
              <button onClick={() => toggleModal("Close")}>
                <FaTimes />
              </button>
            </div>
            <div className="content">
              {activeDropdown === 0 && (
                <div className="board-members">
                  <h2>Our Board</h2>
                  <p>Board goes here</p>
                </div>
              )}
              {activeDropdown === 1 && (
                <div className="leadership">
                  <h2>Our Leadership</h2>
                  <p>Leadership goes here</p>
                </div>
              )}
              {activeDropdown === 2 && (
                <div className="vision">
                  <h2>Vision</h2>
                  <p>
                    To be the distinct and preferred financial service provider
                  </p>
                </div>
              )}
              {activeDropdown === 3 && (
                <div className="mission">
                  <h2>Mission</h2>
                  <p>
                    Bonding with our clients to understand and meet their needs
                    through knowledge, information, dedication, and creativity
                    of our people while satisfying all stakeholders in the
                    environment in which we operate.
                  </p>
                </div>
              )}
              {activeDropdown === 4 && (
                <div className="philosophy">
                  <h2>Philosophy</h2>
                  <p>
                    Guided by our belief that our success depends entirely on
                    the extent to which our clients’ objectives are met, we put
                    ourselves in the place of our clients and we serve them as
                    we will serve ourselves when they are not happy we have
                    failed and when they smile we also smile.
                  </p>
                  <p>
                    We are a friendly company with up to date market information
                    to grow wealth in good time in an atmosphere of
                    transparency.
                  </p>
                </div>
              )}
              {activeDropdown === 5 && (
                <div className="brand">
                  <h2>Brand</h2>
                  <p>
                    The letters in MERISTEM reinforce dominating qualities of
                    assurance, trust and maturity.
                  </p>
                  <p>
                    The green background typifies growth, harmony as well as
                    connotation to money.
                  </p>
                  <p>
                    The three leaf elements supports the tacit meaning of the
                    name which is pacesetting, productivity, multiplication,
                    resilience, determination, futuristic and growth.
                  </p>
                </div>
              )}
              {activeDropdown === 6 && (
                <div className="brand-promise">
                  <h2>Brand Promise</h2>
                  <p>
                    At Meristem, we anchor “Clientocracy” at the heart of our
                    core values, it is the foundation of our existence as an
                    organization, a deep commitment to serve our clients
                    extensively, understand and meet their needs, exceed their
                    expectations and ultimately make them happy.
                  </p>
                  <p>
                    The Brand Ideology, <span className="bold">CEPOEM </span>
                    presents <span className="bold">Clientocracy</span>,
                    <span className="bold"> Esprit de corp</span>,
                    <span className="bold"> Professionalism and Integrity</span>
                    ,<span className="bold"> Ownership</span>,
                    <span className="bold"> Einstein</span>, and
                    <span className="bold"> Meristar-delight</span>.
                  </p>
                </div>
              )}
              {activeDropdown === 7 && (
                <div className="subsidiary">
                  <h2>WEALTH MANAGEMENT LIMITED</h2>
                  <h5>MERISTEM WEALTH MANAGEMENT</h5>
                  <p>
                    MWML is a licensed Asset/Wealth Management Company designed
                    to help grow clients’ wealth with its myriad of innovative
                    services and has grown consistently over the years and
                    currently in excess of N285,000,000,000 assets under
                    management as at 2020.
                  </p>
                </div>
              )}
              {activeDropdown === 8 && (
                <div className="subsidiary">
                  <h2>STOCKBROKERS LIMITED</h2>
                  <h5>MERISTEM SECURITIES TRADING</h5>
                  <p>
                    Licensed by the Securities and Exchange Commission, MSBL
                    offers Brokerage Services, Securities Dealing, Strategic
                    Acquisitions and Investment Research. It also provides easy
                    access to on-line brokerage account allowing clients monitor
                    trades real-time via Meritrade.
                  </p>
                </div>
              )}
              {activeDropdown === 9 && (
                <div className="subsidiary">
                  <h2>CAPITAL LIMITED</h2>
                  <h5>MERISTEM INVESTMENT BANKING</h5>
                  <p>
                    Meristem Capital Limited brings effective solutions tailored
                    towards helping you achieve your strategic goals through
                    Mergers & Acquisitions, Divestitures, Capital Raising and
                    Financial Advisory.
                  </p>
                </div>
              )}
              {activeDropdown === 10 && (
                <div className="subsidiary4">
                  <h2>REGISTRARS AND PROBATE SERVICES LIMITED</h2>
                  <h5>MERISTEM REGISTRAR SERVICES</h5>
                  <p>
                    MRPSL offers first class services in administrating
                    Shareholders Register, IPO & Bond Issues Services,
                    Shareholder Relations and Probate Management. Because we
                    operate an automated share registration service, we are able
                    to offer our clients efficient and reliable services.
                  </p>
                </div>
              )}
              {activeDropdown === 11 && (
                <div className="subsidiary">
                  <h2>TRUSTEES LIMITED</h2>
                  <h5>MERISTEM TRUSTEE SERVICES</h5>
                  <p>
                    Meristem Trustees Limited constantly provides best in class
                    Trust Services such as Bonds & Debenture Trusteeship, Trusts
                    of Securitization, Endowment Scheme Management, Employee
                    Benefits Scheme, Private Trusts to Institutions, States and
                    Individuals.
                  </p>
                </div>
              )}
              {activeDropdown === 12 && (
                <div className="subsidiary">
                  <h2>FINANCE LIMITED</h2>
                  <h5>MERISTEM LOANS AND LEASING</h5>
                  <p>
                    Meristem Finance Limited is the finance house of the
                    Meristem group. It is a non-banking financial institution
                    and equipment leasing firm licensed by the Central Bank of
                    Nigeria. MFL provides Financial Services, Leases and Loans
                    at competitive rates.
                  </p>
                </div>
              )}
              {activeDropdown === 13 && (
                <div className="subsidiary">
                  <h2>FAMILY SERVICES</h2>
                  <h5>MERISTEM FAMILY SERVICES</h5>
                  <p>
                    MERISTEM SECURITIES TRADING Licensed by the Securities and
                    Exchange Commission, MSBL offers Brokerage Services,
                    Securities Dealing, Strategic Acquisitions and Investment
                    Research. It also provides easy access to on-line brokerage
                    account allowing clients monitor trades real-time via
                    Meritrade.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoreValues;
