import React from 'react'
import './style.scss'

const ExperienceUnit = ({ link, title, timeperiod, description, logo, colour }) => (
  <div className="experience-unit col-xs-12 col-sm-6 col-md-4">
    <a href={link} target="_blank">
      <div
        className="image"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundColor: colour
        }}>
      </div>
    </a>
    <div className="title bold">
      {title}
    </div>
    <div className="time-period">
      {timeperiod}
    </div>
    <div className="description">
      {description}
    </div>
  </div>
);

export default ExperienceUnit;
