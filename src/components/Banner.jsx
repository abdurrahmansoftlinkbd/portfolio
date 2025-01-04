import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="hero pt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/zS5MDwj/freepik-export-20240930075401dna8.jpg"
          className="max-w-xs rounded-lg shadow-2xl"
        />
        <div className="w-3/5">
          <h2 className="text-5xl font-bold">Hey, I’m Abdur Rahman</h2>
          <h3 className="text-3xl mt-3">Web Developer</h3>
          <p className="py-6 font-lato">
            I specialize in creating responsive, interactive, and visually
            engaging websites and applications. With expertise in HTML, CSS,
            JavaScript, React, and modern frontend frameworks, I design seamless
            user experiences while ensuring optimized performance. Let’s build
            the web together!
          </p>
          <a
            href="https://docs.google.com/document/d/1dbe4190Bb5HvA7EzKUetu1jjsxD6Q5T_h10Ot6rPWBo/edit?usp=sharing"
            target="_blank"
            className="btn bg-default border-default hover:bg-dark hover:border-dark text-white"
          >
            Download Resume
          </a>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/abdurrahmansoftlinkbd"
              target="_blank"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a href="https://github.com/abdurrahmansoftlinkbd" target="_blank">
              <FaGithub className="text-4xl" />
            </a>
            <a href="https://x.com/abdurrahmanlink" target="_blank">
              <FaXTwitter className="text-4xl" />
            </a>
            <a
              href="https://www.facebook.com/abdurrahmansoftlinkbd"
              target="_blank"
            >
              <FaFacebook className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
