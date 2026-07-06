import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { preloaderQuotes } from '../data/content'

const TILES = 20

function unlockScroll() {
  document.body.classList.remove('preloader-active')
  document.body.style.overflow = ''
}

function pickQuote() {
  return preloaderQuotes[Math.floor(Math.random() * preloaderQuotes.length)]
}

export default function Preloader() {
  const { pathname } = useLocation()
  const [phase, setPhase] = useState('loading')
  const [quote, setQuote] = useState(pickQuote)

  useEffect(() => {
    setQuote(pickQuote())
    setPhase('loading')
    document.body.classList.add('preloader-active')

    const revealTimer = setTimeout(() => setPhase('logo'), 1200)
    const exitTimer = setTimeout(() => {
      unlockScroll()
      setPhase('exit')
    }, 2600)
    const hideTimer = setTimeout(() => setPhase('hidden'), 3200)

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
      unlockScroll()
    }
  }, [pathname])

  if (phase === 'hidden') return null

  return (
    <div
      className={`preloader ${phase === 'exit' ? 'preloader--exit' : ''} ${phase === 'logo' || phase === 'exit' ? 'preloader--logo' : ''}`}
      aria-hidden="true"
    >
      <div className="preloader__scene" key={pathname}>
        <div className="preloader__tiles">
          {Array.from({ length: TILES }, (_, index) => (
            <span
              key={index}
              className="preloader__tile"
              style={{ '--delay': `${index * 0.055}s` }}
            />
          ))}
        </div>

        <div className="preloader__logo-wrap">
          <img
            src="/logo-dark.png"
            alt="Milošević DOO"
            className="preloader__logo"
            onError={(e) => { e.currentTarget.src = '/logo.svg' }}
          />
        </div>
      </div>

      <p className="preloader__quote" key={quote}>
        {quote}
      </p>

      <div className="preloader__credit">
        <span className="preloader__credit-glow" aria-hidden="true" />
        <span className="preloader__credit-logo-wrap">
          <img
            src="/logo-cokoladni.png"
            alt="Čokoladni AJ TI"
            className="preloader__credit-logo"
          />
        </span>
        <span className="preloader__credit-text">Čokoladni AJ TI</span>
      </div>
    </div>
  )
}
