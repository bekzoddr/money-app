import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const ClientForm = ({ isOpen, closeModal }) => {
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
    console.log("Client Data:", formData);
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="cancel" onClick={closeModal}>
              <ImCancelCircle size={25} />
            </button>
            <form className="form" onSubmit={handleSubmit}>
              <h2>Create Client</h2>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Surname:
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </label>
              <label>
                Passport ID:
                <input
                  type="text"
                  name="passportId"
                  value={formData.passportId}
                  onChange={handleChange}
                />
              </label>
              <label>
                Passport Number:
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                />
              </label>
              <label>
                Balance:
                <input
                  type="number"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                />
              </label>
              <label>
                Income:
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                />
              </label>
              <label>
                Expense:
                <input
                  type="number"
                  name="expense"
                  value={formData.expense}
                  onChange={handleChange}
                />
              </label>
              <label>
                Profit:
                <input
                  type="number"
                  name="profit"
                  value={formData.profit}
                  onChange={handleChange}
                />
              </label>
              <label>
                Status:
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
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

export default ClientForm;
