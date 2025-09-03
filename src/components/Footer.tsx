import { socialLinks, handleClick } from "../utils/social-links"
  
export function Footer() {
  return (
      <footer 
        className="animated-gradient-wave min-w-full"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto p-4 flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 m-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPoCRBeF2HXS2oLEI7Vb4Zvm2yVFfoLnk9s-IQNvECchB0SA/viewform?embedded=true"
              className="px-3 py-2 lg:px-4 lg:py-2.5
                        text-black font-[Fascinate_Inline] text-2xl md:text-3xl
                        hover:-translate-y-1 transition-transform duration-100 focus:shadow-2xl"
              aria-label="Contact me"
              target="_blank"
            >
              Contact
            </a>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link)}
                  className="hover:-translate-y-1 transition-transform duration-100 focus:shadow-2xl"
                  aria-label={`Visit my ${link.name}`}
                >
                  <span className="sr-only">{link.name}</span>
                  <img
                    src={link.icon}
                    alt=""
                    className="h-10 w-10 md:w-12 md:h-12"
                    loading="lazy"
                    width={32}
                    height={32}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex text-center items-center p-2 mt-2">
            <p className="text-xl text-black">Amanda Williamson © 2025</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 my-3">
            <a
              href="https://www.termsfeed.com/live/a3c2186c-309d-4307-8cc8-b8a4b41e8ddc"
              className="text-md text-shadow-[0_5px_3px_rgb(0_0_0_/_0.5)] hover:underline focus:outline-none focus:underline"
              aria-label="View Privacy Policy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
  )
}


