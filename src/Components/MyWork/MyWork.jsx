import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import work_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleImageClick = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <div id='mywork' className='mywork'>
      <div className="work-title">
        <h1>My Work Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="work-container">
        {work_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt=""
            onClick={() => handleImageClick(work)}
            className="work-image"
          />
        ))}
      </div>

      <div className="work-showmore">
        <p>Thanks For Coming</p>
        <img src={arrow_icon} alt="" />
      </div>

      {/* Modal for full description */}
      {selectedWork && (
        <div className="work-modal-overlay" onClick={closeModal}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedWork.w_name}</h2>
            <p>{selectedWork.w_desc}</p>
            <button className="work-close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
