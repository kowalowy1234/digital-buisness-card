import React from "react";
import { mdiLinkedin } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import Icon from '@mdi/react';

export default function Contact () {
  return (
    <div className="contact">
      <button className="email-button">
      <Icon 
          path={mdiEmail}
          title="Email Icon"
          size={1}
          horizontal
          vertical
          rotate={180}
          color="black"
        />
        <p>Email</p>
      </button>
      <button className="linkedin-button">
        <Icon 
          path={mdiLinkedin}
          title="LinkedIn Icon"
          size={1}
          horizontal
          vertical
          rotate={180}
          color="white"
        /><p>LinkedIn</p>
      </button>
    </div>
  );
}