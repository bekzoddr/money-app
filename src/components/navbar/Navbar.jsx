import React, { useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BiSolidAnalyse } from "react-icons/bi";
import { FaCalculator } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <>
      <div className="sidebar-menu container">
        <div
          className={`menu-button ${isOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <LiaClipboardListSolid />
              <span>Dashboard</span>
            </li>
            <li>
              <BiSolidAnalyse />
              <span>Reports</span>
            </li>
            <li>
              <FaCalculator />
              <span>Calculations</span>
            </li>
            <li>
              <IoWalletOutline />
              <span>Transactions</span>
            </li>
            <li>
              <MdOutlineSell />
              <span>Marketplace</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__content">
        <div className="date">
          <button onClick={handlePreviousMonth}>
            <FaChevronLeft />
          </button>
          <span>{currentDate.format("MMMM, YYYY")}</span>
          <button onClick={handleNextMonth}>
            <FaChevronRight />
          </button>
        </div>
        <div className="verces">
          <div className="verce">
            <p className="verce__name">EXPENSE</p>
            <li className="verce__amount red">лв0.00</li>
          </div>
          <div className="verce">
            <p className="verce__name">INCOME</p>
            <li className="verce__amount">лв0.00</li>
          </div>
          <div className="verce">
            <p className="verce__name">BALANCE</p>
            <li className="verce__amount">лв0.00$</li>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul className="nav__links">
          <NavLink className="nav__link" to="/">
            <LiaClipboardListSolid />
            <span>Home</span>
          </NavLink>
          <NavLink className="nav__link" to="/analysis">
            <BiSolidAnalyse />
            <span>Analysis</span>
          </NavLink>
          <NavLink className="nav__link" to="/">
            <FaCalculator />
            <span>Calculator</span>
          </NavLink>
          <NavLink className="nav__link" to="/">
            <IoWalletOutline />
            <span>Budget</span>
          </NavLink>
          <NavLink className="nav__link" to="/">
            <MdOutlineSell />
            <span>Sell</span>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
