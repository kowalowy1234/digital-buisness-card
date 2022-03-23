import React from "react";
import { mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

export default function Footer () {
  return (
    <div className="footer">
      <Icon 
        path={mdiTwitter}
        title="Twitter Icon"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="#918E9B"
      />
      <Icon 
        path={mdiFacebook}
        title="Facebook Icon"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="#918E9B"
      />
      <Icon 
        path={mdiInstagram}
        title="Instagram Icon"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="#918E9B"
      />
      <Icon 
        path={mdiGithub}
        title="Github Icon"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="#918E9B"
      />
    </div>
  );
}