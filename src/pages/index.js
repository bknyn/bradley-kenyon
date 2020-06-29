import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/header';
import ContentSection from '../components/contentSection';
import resumeContent from '../resume-content.json';

const Index = ({ resume }) => (
  <>
    <Head>
      <title>{resume.title}</title>
      <meta name="description" content={resume.description} />
    </Head>
    <main className="container">
      <Header content={resume.header} />
      <ContentSection
        sectionClass="experience"
        content={resume.experience}
      />
      <ContentSection
        sectionClass="specialities"
        content={resume.specialities}
      />
      <ContentSection
        sectionClass="skills"
        content={resume.skills}
      />

      <div className="standard-section contact">
        <div className="standard-section__inner">
          <h2>{resume.contact.heading}</h2>
          {resume.contact.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </div>
    </main>
  </>
);

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
    header: PropTypes.object,
    experience: PropTypes.object,
    specialities: PropTypes.object,
    skills: PropTypes.object,
    contact: PropTypes.shape({
      heading: PropTypes.string,
      paragraphs: PropTypes.array
    })
  }).isRequired
};

export default Index;
