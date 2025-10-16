import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/seu-usuario', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/seu-usuario', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:seu-email@email.com', label: 'Email' },
]

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-slate-200 transition-colors"
              aria-label={link.label}
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}