import PropTypes from 'prop-types';
import React from 'react';

const DefinitionList = ({ entries }) => (
  <dl>
    {entries.map((entry) => (
      <React.Fragment key={entry.title}>
        <dt>
          <h3>
            {entry.title}
            {entry.duration && (
              <span>{entry.duration}</span>
            )}
          </h3>
        </dt>
        <dd dangerouslySetInnerHTML={{ __html: entry.description }} />
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
