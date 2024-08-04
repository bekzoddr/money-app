import React, { useState } from "react";
import { investors } from "../../static";
import { IoMdMore } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Investors = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="investors__wrapper container">
      <div className="investor__data">
        {investors?.map((investor) => (
          <div key={investor.id} className="data-item">
            <button onClick={() => handleOpen(investor.image)}>
              <IoMdMore size="24" className="more-icon" />
            </button>
            <div className="info-row">
              <img
                src={investor.image}
                alt={`${investor.name} ${investor.surname}`}
                className="profile-pic"
                onClick={() => handleOpen(investor.image)}
              />
              <div className="investor__infos">
                <p className="name">Name: {investor.name}</p>
                <p className="surname">Surname: {investor.surname}</p>
                <p className="income">Income: ${investor.income}</p>
                <p className="expenses">Expense: ${investor.expenses}</p>
              </div>
            </div>
          </div>
        ))}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} onClick={handleClose}>
            <img
              src={selectedImage}
              alt="Investor"
              style={{ width: "80%", height: "80%", objectFit: "contain" }}
              onClick={(e) => e.stopPropagation()}
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Investors;
