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
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sint corporis laboriosam id amet reprehenderit in obcaecati nemo
            accusantium ab quibusdam ratione quam quos ea, ipsum consequatur.
            Error corporis itaque animi quis velit, doloribus atque earum
            possimus a sint distinctio molestiae quaerat officiis, recusandae,
            tempora expedita id fugit aliquid! Laudantium.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
