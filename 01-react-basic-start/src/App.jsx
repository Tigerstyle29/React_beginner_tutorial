import Header from "./components/Header"

function WayToTeach() {
  return (
  <li>
    <p>
      <strong>Фильтрация информации и технологий.</strong> Из
      огромного количества информации и навыков в IT, вы получается
      только что, что необходимо и работает.
    </p>
  </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            <WayToTeach />
            <WayToTeach />
            <WayToTeach />
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
