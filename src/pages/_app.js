import PropTypes from 'prop-types';
import '../styles/global.css';

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

App.defaultProps = {
  Component: '',
  pageProps: ''
};

export default App;
