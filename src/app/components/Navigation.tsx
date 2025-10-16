'use client'

import { useActiveSection } from '@/hooks/useActiveSection'

const sections = [
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
]

export default function Navigation() {
  const activeSection = useActiveSection()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
      <ul className="w-max">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`group flex items-center py-3 ${
                activeSection === section.id ? 'active' : ''
              }`}
            >
              <span
                className={`nav-indicator mr-4 h-px transition-all ${
                  activeSection === section.id
                    ? 'w-16 bg-slate-200'
                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  activeSection === section.id
                    ? 'text-slate-200'
                    : 'text-slate-500 group-hover:text-slate-200'
                }`}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}