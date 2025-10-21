import { Navigation } from './components/Navigation'
import { ScrollToTop } from './components/ScrollToTop'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Portfolio } from './sections/Portfolio'
import { Experience } from './sections/Experience'
import { Contact, Footer } from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
