import { useRef } from 'react';
import { ProjectItems } from '../utils/project-data';
import { Scroll } from './ui/Scroll';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="min-h-screen w-full relative bg-black py-10 md:py-50"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto md:px-4 flex items-center justify-center h-full">
          <h2 
            id="projects-heading"
            className="text-center text-3xl md:text-8xl font-[Fascinate_Inline] md:mb-5 text-transparent bg-clip-text 
            bg-gradient-to-r from-rose-600 via-lime-400 to-fuchsia-600 text-shadow-black"
          >
            Featured Projects
          </h2> 
      </div>
      <div className="relative w-full" style={{ height: `${ProjectItems.length * 100}vh` }}>
        {ProjectItems.map((project, index) => (
          <Scroll 
            key={`project-${index}`}
            className="px-4"
          > 
            <div className="w-full rounded-xl overflow-hidden flex flex-col">
              <a 
                href={project.url}
                className="cursor-pointer block focus:outline-none h-full"
                aria-label={`View ${project.title} project`}
                target="_blank"
              >
                <div className="p-3 h-1/4 bg-black flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm md:text-lg">{project.description}</p>
                </div>
                <div className="bg-black w-full">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="object-fill w-full"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </Scroll>
        ))} 
      </div>
    </section>
  )
}