export const Skills = () => {
    return (
        <section id="skills"
            className="w-full h-auto bg-transparent flex items-center justify-center">
            <div className="p-2 m-2">
                <h4 className="font-[Fascinate_Inline] my-10 text-center text-3xl md:text-6xl text-transparent 
                              bg-clip-text bg-gradient-to-r from-rose-600 via-lime-400 to-fuchsia-600"
                >
                    Skills
                </h4>
                <ul className="skill-box flex flex-wrap justify-center gap-3">
                    {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 
                        'Bootstrap', 'RESTful APIs', 'Zustand', 'Redux', 'ContextAPI', 'Python', 'Django', 
                        'Flask', 'FastAPI', 'Redux', 'PostgreSQL', 'GraphQL', 'Git'
                    ].map((skill) => (
                        <li 
                            key={skill} 
                            className="animated-gradient-wave px-4 py-2 text-white font-semibold rounded-lg 
                                    drop-shadow-gray-800 drop-shadow-lg"
                        >
                            {skill}
                        </li> 
                    ))}
                </ul>
            </div>
        </section>
    )
}