import Header from '@/app/components/Header'
import About from '@/app/components/About'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
