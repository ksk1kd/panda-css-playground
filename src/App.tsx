import { css, cva } from '../styled-system/css'

function App() {
  const button = cva({
    base: {
      colorPalette: 'blue',
      display: 'flex',
      borderRadius: 'md',
    },
    variants: {
      visual: {
        solid: { bg: 'colorPalette.500', color: 'white' },
        outline: { borderWidth: '3px', borderColor: 'colorPalette.200' },
      },
      size: {
        sm: { padding: '2', fontSize: '12px' },
        lg: { padding: '3', fontSize: '24px' },
      },
    },
  })

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

        <h2
          className={css({
            bg: { base: 'red.500', _hover: 'red.700' },
            fontSize: '2xl',
          })}
        >
          Pseudo Style
        </h2>

        <p>
          <button
            type="button"
            className={button({ visual: 'solid', size: 'lg' })}
          >
            Button
          </button>
        </p>
      </div>
    </>
  )
}

export default App
