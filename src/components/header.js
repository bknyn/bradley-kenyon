import PropTypes from 'prop-types';
import Monogram from './monogram';
import styles from '../styles/components/header.module.css';

const Header = ({ content }) => (
  <div className={styles.header}>
    <Monogram />
    <h1>{content.heading}</h1>
    <p dangerouslySetInnerHTML={{ __html: content.text }} />
  </div>
);

Header.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Header;
