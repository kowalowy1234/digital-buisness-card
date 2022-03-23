import React from "react";
import photo from '../Images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg'

export default function PersonalInfo () {
  return (
    <div className="personal-info">
      <img className="personal-info--photo" src={photo} alt="photo of a busnesswoman"/>
      <h1>Laura Smith</h1>
      <h4>Frontend Developer</h4>
      <a>laurasmith.website</a>
    </div>
  );
}