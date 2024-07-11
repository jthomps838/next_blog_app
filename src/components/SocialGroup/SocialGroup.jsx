import React from 'react';

import IconYoutube from '../Icons/Youtube';
import IconGithub from '../Icons/Github';
import IconLinkedin from '../Icons/LinkedIn';
import withLink from '../HOCs/withLink';
import socialConfig from '@/config/socialConfig';
import { ICON_SIZE } from '@/constants';

const YoutubeLink = withLink(IconYoutube, socialConfig.youtube);
const GithubLink = withLink(IconGithub, socialConfig.github);
const LinkedInLink = withLink(IconLinkedin, socialConfig.linkedIn);

const SocialGroup = ({ styles }) => {
  return (
    <section className={styles.social}>
      <GithubLink squared={ICON_SIZE} className={styles.icon} />
      <LinkedInLink squared={ICON_SIZE} className={styles.icon} />
      <YoutubeLink squared={ICON_SIZE} className={styles.icon} />
    </section>
  );
};

export default SocialGroup;
