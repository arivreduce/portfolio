import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          alt="coffee and code section"
          className="w-full h-64"
        />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I’m a software engineer with a strong foundation in building
            dynamic, scalable applications. Skilled in JavaScript, React, and
            Node.js, I enjoy creating intuitive user interfaces and efficient
            back-end solutions that improve performance and user experience. My
            recent work on Testsudo—a testing suite for frontend, backend, and
            security metrics—showcases my focus on delivering impactful tools
            for developers, from configuring Google Lighthouse for accurate
            metrics to designing a user-friendly dashboard for in-depth
            analysis. With experience in a range of technologies, from
            TypeScript to AWS, I bring a versatile approach to problem-solving
            and thrive on learning new skills to optimize every aspect of my
            projects. Outside of coding, you’ll find me practicing yoga, playing
            tennis, or exploring music history one album at a time.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
