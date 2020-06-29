import PropTypes from 'prop-types';
import Monogram from './monogram';

const Header = ({ content }) => (
  <div className="header">
    <div className="logo">
      <Monogram />
    </div>
    <h1 className="title">{content.heading}</h1>
    <p className="intro" dangerouslySetInnerHTML={{ __html: content.text }} />
  </div>
);

Header.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Header;
