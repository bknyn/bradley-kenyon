import PropTypes from 'prop-types';
import styles from '../styles/components/header.module.css';

const Header = ({ content }) => (
  <div className={styles.header}>
    <div>Logo</div>
    <h1>{content.heading}</h1>
    <p dangerouslySetInnerHTML={{ __html: content.text }} />
  </div>
);

Header.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string,
    intro: PropTypes.string
  }).isRequired
};

export default Header;
