export const Hero = () => {
    return (
        <section 
            id="home"
            className="min-h-screen flex flex-col items-center justify-center overflow-hidden snap-start bg-black pb-20">
            <div className="relative z-10 w-full max-w-screen text-center">
                <h1 className="text-8xl py-4 px-2 mb-4 font-[Fascinate_Inline] text-transparent
                              bg-clip-text bg-gradient-to-r from-rose-600 via-lime-400 to-fuchsia-600"
                >
                    Hi! I'm Amanda
                </h1>
                <h2 className="animated-fade-in text-5xl py-4 px-2 font-[Fascinate_Inline] text-transparent
                              bg-clip-text bg-gradient-to-r from-rose-600 via-lime-400 to-fuchsia-600"
                >
                    <span className="motion-safe:animate-pulse text-6xl text-shadow-lg text-shadow-neutral-50/50 px-4"> 
                         ⇩  
                    </span> 
                     welcome to my web developer portfolio  
                    <span className="motion-safe:animate-pulse text-6xl text-shadow-lg text-shadow-neutral-50/50 px-4">
                         ⇩  
                    </span> 
                </h2>
            </div>
        </section>
    )
}