import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/header';
import resumeContent from '../resume-content.json';

const Index = ({ resume }) => {
  return (
    <>
      <Head>
        <title>{resume.title}</title>
        <meta name="description" content={resume.description} />
      </Head>
      <Header
        content={resume.header}
      />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      resume: resumeContent
    }
  };
};

Index.propTypes = {
  resume: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    header: PropTypes.object
  }).isRequired
};

export default Index;
