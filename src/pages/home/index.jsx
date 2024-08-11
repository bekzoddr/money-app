import React, { useState, useEffect } from "react";
import InvestorForm from "../../components/investors_form/InvestorForm";
import ClientForm from "../../components/clients_form/ClientForm";
import Investors from "../../components/investors/Investors";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [formType, setFormType] = useState(null);
  const [showRoundButtons, setShowRoundButtons] = useState(false);

  const openForm = (type) => {
    setFormType(type);
    setIsFormOpen(true);
    setShowRoundButtons(false);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormType(null);
  };

  const toggleRoundButtons = () => {
    setShowRoundButtons(!showRoundButtons);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {formType === "investor" && (
        <InvestorForm isOpen={isFormOpen} closeModal={closeForm} />
      )}
      {formType === "client" && (
        <ClientForm isOpen={isFormOpen} closeModal={closeForm} />
      )}
      {/* <Investors /> */}
      <div className="add">
        <button
          className={`add-button ${showRoundButtons ? "open" : ""}`}
          onClick={toggleRoundButtons}
        >
          {!showRoundButtons && "+"}
        </button>
        <div className={`round-buttons ${showRoundButtons ? "visible" : ""}`}>
          <button className="round-button" onClick={() => openForm("investor")}>
            Create Investor
          </button>
          <button className="round-button" onClick={() => openForm("client")}>
            Create Client
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
