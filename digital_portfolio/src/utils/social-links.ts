import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
import emailIcon from '../assets/icons/email.svg'

interface SocialLink {
    name: string
    icon: string
    url: string
}

export const socialLinks: SocialLink[] = [
    {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/aw-amanda-williamson",
    },
    {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/aw-amanda",
    },
    {
    name: "Email",
    icon: emailIcon,
    url: "mailto:aw.amandawilliamson@gmail.com",
    }
]

export const handleClick = (link: SocialLink) => {
    window.open(link.url, "_blank", "noopener,noreferrer")
}

