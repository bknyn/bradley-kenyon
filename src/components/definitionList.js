import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/components/definitionList.module.css';

const DefinitionList = ({ entries }) => (
  <dl className={styles.list}>
    {entries.map((entry) => (
      <React.Fragment key={entry.title}>
        <dt>
          <h3 className={styles.heading}>
            {entry.title}
            {entry.duration && (
              <span className={styles.subHeading}>{entry.duration}</span>
            )}
          </h3>
        </dt>
        <dd
          className={styles.definition}
          dangerouslySetInnerHTML={{ __html: entry.description }}
        />
      </React.Fragment>
    ))}
  </dl>
);

DefinitionList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      duration: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired
};

export default DefinitionList;
