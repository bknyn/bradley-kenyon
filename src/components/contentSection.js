import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/components/contentSection.module.css';

const ContentSection = ({ sectionClass, sectionHeading, children }) => (
  <div className={`${styles.contentSection} ${styles[sectionClass]}`}>
    <div className={styles.contentSectionInner}>
      <h2>{sectionHeading}</h2>
      {children}
    </div>
  </div>
);

ContentSection.propTypes = {
  sectionClass: PropTypes.string.isRequired,
  sectionHeading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ContentSection;
