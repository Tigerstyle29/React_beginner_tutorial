import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/introSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  )
}

export default App
