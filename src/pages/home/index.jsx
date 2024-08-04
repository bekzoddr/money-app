import React, { useState, useEffect } from "react";
import Form from "../../components/investors_form/Create-Investor-Form";
import Investors from "../../components/investors/Investors";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      <Form isOpen={isOpen} closeModal={closeModal} />
      <div className="add">
        <Investors />
        <button
          className={`add-button ${showButton ? "visible" : "hidden"}`}
          onClick={openModal}
        >
          +
        </button>
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
