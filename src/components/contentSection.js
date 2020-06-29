import PropTypes from 'prop-types';
import React from 'react';

const ContentSection = ({ sectionClass, content }) => (
  <div className={`standard-section ${sectionClass}`}>
    <div className="standard-section__inner">
      <h2>{content.heading}</h2>
      <dl>
        {content.entries.map((entry) => (
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
    </div>
  </div>
);

ContentSection.propTypes = {
  sectionClass: PropTypes.string.isRequired,
  content: PropTypes.shape({
    heading: PropTypes.string,
    entries: PropTypes.array
  }).isRequired
};

export default ContentSection;
