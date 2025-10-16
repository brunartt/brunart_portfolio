export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Desenvolvido com{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
        >
          Next.js
        </a>{' '}
        e{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
        >
          Tailwind CSS
        </a>
        . Código disponível no{' '}
        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  )
}