import { Skills } from "./Skills";

export const About = () => {
  return (
    <section 
      id="about"
      className="w-full min-h-screen py-20 relative mb-30 bg-black"
      aria-labelledby="about"
    >
      <div className="text-center m-20 p-4">
        <h2 id="about-heading" className="sr-only">About Me</h2>
        <h2 className="text-8xl font-[Fascinate_Inline] text-transparent bg-clip-text 
          bg-gradient-to-r from-rose-600 via-lime-400 to-fuchsia-600" 
          aria-hidden="true"
        >
        About Me
        </h2> 
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center gap-10">
        <div className="animated-gradient-wave relative z-10 w-full max-w-5xl text-center 
                        rounded-3xl p-10 drop-shadow-gray-800 drop-shadow-lg"
        >
          <p className="m-2 text-xl leading-relaxed text-left">
            As a passionate web developer with expertise in building modern, responsive UI, 
            I thrive on creating unique user experiences and reusable components that combine 
            industry trends and aesthetic styles with clean, maintainable code.
            <br />
            <br />
            Mastering frontend technologies over the last five years has helped me to build 
            a strong foundation for full-stack development, so I am always on the lookout for new 
            projects.&nbsp;
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPoCRBeF2HXS2oLEI7Vb4Zvm2yVFfoLnk9s-IQNvECchB0SA/viewform?embedded=true"
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r
                        from-rose-600 via-lime-400 to-fuchsia-600 hover:text-white 
                        transition-colors duration-100"
              >
                  Get in touch
              </a>&nbsp;
            with me if you would like to build something together!
          </p>
        </div>
        <div className="max-w-5xl p-2 mx-2 items-center bg-transparent">
          <Skills />
        </div>
      </div>
    </section>
  );
};