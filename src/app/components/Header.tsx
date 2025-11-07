import Navigation from '@/app/components/Navigation'
import SocialLinks from '@/app/components/SocialLinks'

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Bruna Silva
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Front-End Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Criando experiências digitais pixel-perfect para a web
        </p>

        <Navigation />
      </div>

      <SocialLinks />
    </header>
  )
}