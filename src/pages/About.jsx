import Education from "../components/Education";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <section className="hero pt-16">
        <div className="hero-content md:gap-12 flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/wKCh9yv/ilya-pavlov-Oqtaf-YT5k-Tw-unsplash.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="w-3/4">
            <h2 className="text-5xl font-bold">About</h2>
            <p className="py-6 font-lato">
              Hey, I’m Abdur Rahman, a passionate learner and an aspiring
              developer. Currently, I’m pursuing my Bachelor’s degree in
              Mathematics (Honors) at Comilla University
            </p>
            <p className="pb-6 font-lato">
              My journey into programming started with JavaScript, where I
              developed a solid foundation in logic and computational thinking.
              Over time, I discovered my passion for web development. I actively
              explore and build modern, responsive websites, combining
              creativity with functionality.
            </p>
            <p className="pb-6 font-lato">
              Beyond academics and coding, I enjoy spending time exploring new
              technologies, teaching others, and occasionally indulging in
              hobbies like reading or brainstorming creative ideas. These
              experiences help me stay inspired and add unique perspectives to
              my work.
            </p>
          </div>
        </div>
      </section>
      <section className="my-20">
        <Skills></Skills>
      </section>
      <section>
        <Education></Education>
      </section>
    </>
  );
};

export default About;
