import React, { useState } from 'react';
import './AddProfileCard.css';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const AddProfileCard = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [basicData, setBasicData] = useState({ name: '', email: '', phone: '' });
  const [socialData, setSocialData] = useState({ instagram: '', youtube: '' });
  const [showProfile, setShowProfile] = useState(false);

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setBasicData({ name: '', email: '', phone: '' });
    setSocialData({ instagram: '', youtube: '' });
  };

  const handleBasicInputChange = (e) => {
    const { name, value } = e.target;
    setBasicData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialInputChange = (e) => {
    const { name, value } = e.target;
    setSocialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDoneClick = () => {
    setShowProfile(true);
    handleCloseForm();
  };

  return (
    <div className="add-profile-card">
      {showProfile ? (
        <div className="display-profile-data">
          <h4>{basicData.name}</h4>
          <div className="profile-info-row">
            <p>
              <BsWhatsapp /> {basicData.phone}
            </p>
            <p>
              <FaInstagramSquare /> {socialData.instagram}
            </p>
          </div>
          <div className="profile-info-row">
            <p>
              <FiMail /> {basicData.email}
            </p>
            <p>
              <AiFillYoutube /> {socialData.youtube}
            </p>
          </div>
        </div>
      ) : (
        <div className="add-profile-button" onClick={handleOpenForm}>
          <span style={{ fontSize: '50px' }}>+</span>
        </div>
      )}
      {isFormOpen && (
        <div className="profile-form-modal">
          <div className="profile-form">
            <h4>Basic Information</h4>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={basicData.name}
                onChange={handleBasicInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={basicData.email}
                onChange={handleBasicInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={basicData.phone}
                onChange={handleBasicInputChange}
              />
            </form>
            <h4>Social Links</h4>
            <form>
              <input
                type="url"
                name="instagram"
                placeholder="Instagram Link"
                value={socialData.instagram}
                onChange={handleSocialInputChange}
              />
              <input
                type="url"
                name="youtube"
                placeholder="YouTube Link"
                value={socialData.youtube}
                onChange={handleSocialInputChange}
              />
            </form>
            <button onClick={handleDoneClick}>Done</button>
            <button onClick={handleCloseForm}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProfileCard;





