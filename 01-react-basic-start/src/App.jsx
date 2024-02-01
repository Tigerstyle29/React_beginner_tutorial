import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/introSection'
import TabsSection from './components/TabsSection'
import FeedBackSection from './components/FeedbackSection'
import { useState } from 'react'

function App() {
  const [tab, setTab] = useState('feedback') 

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === 'feedback' && <FeedBackSection />}
      </main>
    </>
  )
}

export default App
