import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/header';
import ContentSection from '../components/contentSection';
import DefinitionList from '../components/definitionList';
import resumeContent from '../resume-content.json';
import grid from '../styles/components/grid.module.css';

const Index = ({ resume }) => (
  <>
    <Head>
      <title>{resume.title}</title>
      <meta name="description" content={resume.description} />
    </Head>
    <main className={grid.container}>
      <Header content={resume.header} />

      <ContentSection sectionClass="experience" sectionHeading={resume.experience.heading}>
        <DefinitionList entries={resume.experience.entries} />
      </ContentSection>

      <ContentSection sectionClass="specialities" sectionHeading={resume.specialities.heading}>
        <DefinitionList entries={resume.specialities.entries} />
      </ContentSection>

      <ContentSection sectionClass="skills" sectionHeading={resume.skills.heading}>
        <DefinitionList entries={resume.skills.entries} />
      </ContentSection>

      <ContentSection sectionClass="contact" sectionHeading={resume.contact.heading}>
        {resume.contact.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </ContentSection>
    </main>
  </>
);

export const getStaticProps = async () => (
  {
    props: {
      resume: resumeContent
    }
  }
);

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
