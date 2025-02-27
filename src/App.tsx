import { css } from '../styled-system/css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className={css({ fontSize: '6xl', fontWeight: 'bold' })}>
          Panda CSS Playground
        </h1>

        <p>
          <a href="/">Sample Link</a>
        </p>
      </div>
    </>
  )
}

export default App
