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
        <p>
          <a href="/" className="btn">
            Button
          </a>
        </p>

        <p className={css({ bg: 'mint.500' })}>Background color is mint.</p>
      </div>
    </>
  )
}

export default App
