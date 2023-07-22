import { useState } from "react";
import "./CoreValues.css";

const CoreValues = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleDropdown = (index: any) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="about-buttons">
      <button onClick={() => toggleDropdown(0)}>Our Leadership</button>
      <button onClick={() => toggleDropdown(1)}>Core Values</button>
      <button onClick={() => toggleDropdown(2)}>Subsidiaries</button>

      {/* Dropdown Content */}
      <div
        className={`dropdown-content ${
          activeDropdown !== null ? "show-dropdown" : ""
        }`}
      >
        {activeDropdown === 0 && (
          <div className="dropdown-content-buttons">
            <button onClick={toggleModal}>Our Board</button>
            <button onClick={toggleModal}>Our Leadership</button>
          </div>
        )}

        {activeDropdown === 1 && (
          <div className="dropdown-content-buttons">
            <button onClick={toggleModal}>Our Mission</button>
            <button onClick={toggleModal}>Our Vision</button>
            <button onClick={toggleModal}>Our Philosophy</button>
            <button onClick={toggleModal}>Our Brand</button>
            <button onClick={toggleModal}>Brand Promise</button>
          </div>
        )}

        {activeDropdown === 2 && (
          <div className="dropdown-content-buttons">
            <button onClick={toggleModal}>MERISTEM WEALTH MANAGEMENT</button>
            <button onClick={toggleModal}>MERISTEM SECURITIES TRADING</button>
            <button onClick={toggleModal}>MERISTEM INVESTMENT BANKING</button>
            <button onClick={toggleModal}>MERISTEM REGISTRAR SERVICES</button>
            <button onClick={toggleModal}>MERISTEM TRUSTEE SERVICES</button>
            <button onClick={toggleModal}>MERISTEM LOANS AND LEASING</button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal-container">
          <div className="modal">
            {/* Close sign */}
            <button className="close-button" onClick={toggleModal}>
              X
            </button>

            <div className="content">
              {/* Render different modal content based on the active dropdown */}
              {activeDropdown === 0 && (
                <div className="vision">
                  <h2>Vision</h2>
                  <p>
                    To be the distinct and preferred financial service provider
                  </p>
                </div>
              )}
              {activeDropdown === 1 && (
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
              {activeDropdown === 2 && (
                <div className="subsidiaries">
                  <h2>Subsidiaries</h2>
                  <p>
                    MERISTEM WEALTH MANAGEMENT, MERISTEM SECURITIES TRADING,
                    MERISTEM INVESTMENT BANKING, MERISTEM REGISTRAR SERVICES,
                    MERISTEM TRUSTEE SERVICES, MERISTEM LOANS AND LEASING
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
