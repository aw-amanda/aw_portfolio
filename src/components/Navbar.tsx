import { useState, useEffect } from 'react'

interface NavLink {
  url: string
  text: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { url: "#", text: "Home" },
  { url: "#about", text: "About" },
  { url: "#projects", text: "Projects" },
  // { 
  //   url: "/", 
  //   text: "Resume", 
  //   external: true },
  { 
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdPoCRBeF2HXS2oLEI7Vb4Zvm2yVFfoLnk9s-IQNvECchB0SA/viewform?embedded=true", 
    text: "Contact",
    external: true 
  },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (e: React.MouseEvent, href: string, isExternal: boolean = false) => {
    setIsOpen(false)
    if (isExternal) {
      return
    }

    e.preventDefault()
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <nav className="sticky top-0 z-80 animated-gradient-wave backdrop-blur-md"
        aria-label="Main navigation"
    >
      <div className="max-w-full mx-auto p-4">
        <div className="relative flex h-16 items-center justify-center">
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((item) => (
              <li key={item.text}>
                <a
                  href={item.url}
                  className="text-black font-[Fascinate_Inline] md:text-xl lg:text-2xl xl:text-3xl 
                            px-3 py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
                          from-red-400 via-emerald-500 to-fuchsia-600 text-shadow-lg 
                            transition-colors duration-200"
                  aria-label={`Navigate to ${item.text} section`}
                  onClick={(e) => handleLinkClick(e, item.url, item.external)}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button*/}
          <button
            type="button"
            className="md:hidden absolute right-4 p-2 rounded-md text-black 
                      hover:-translate-y-1 transition-all duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open navigation menu</span>
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden={!isOpen}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-full' : 'max-h-0'}`}
          id="mobile-menu"
        >
          <div className="m-2 mx-5 space-y-3 flex flex-col items-center justify-center">
            {navLinks.map((item) => (
              <a
                key={item.text}
                href={item.url}
                className={`block w-full p-2 text-center text-lg bg-black text-white rounded-full 
                        active:text-black active:bg-gradient-to-br from-red-400 via-emerald-500
                        to-fuchsia-600 transition-all duration-300 ${!isOpen && 'hidden'}`}
                aria-label={`Navigate to ${item.text} section`}
                onClick={(e) => handleLinkClick(e, item.url, item.external)}
                tabIndex={isOpen ? 0 : -1}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}