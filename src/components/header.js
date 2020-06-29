import PropTypes from 'prop-types';
import Monogram from './monogram';
import styles from '../styles/components/header.module.css';

const Header = ({ content }) => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <Monogram />
    </div>
    <h1 className={styles.title}>{content.heading}</h1>
    <p className={styles.intro} dangerouslySetInnerHTML={{ __html: content.text }} />
  </div>
);

Header.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Header;
