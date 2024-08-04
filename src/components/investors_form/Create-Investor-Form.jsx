import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
const Form = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    passportId: "",
    passportNumber: "",
    balance: "",
    income: "",
    expense: "",
    profit: "",
    status: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {isOpen && (
        <div clImCancelCircleck={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="cancel" onClick={closeModal}>
              <ImCancelCircle size={25} />
            </button>
            <form className="investor-form" onSubmit={handleSubmit}>
              <label>
                Investor Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Surname:
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Passport ID:
                <input
                  type="text"
                  name="passportId"
                  value={formData.passportId}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Passport Number:
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Balance:
                <input
                  type="number"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Income:
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Expense:
                <input
                  type="number"
                  name="expense"
                  value={formData.expense}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Profit:
                <input
                  type="number"
                  name="profit"
                  value={formData.profit}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Status:
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                />
              </label>
              <label>
                Investor Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
