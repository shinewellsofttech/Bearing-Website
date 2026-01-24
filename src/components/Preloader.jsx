import { useEffect, useState } from 'react'

function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div id="pre-load">
      <div id="loader" className="loader">
        <div className="loader-container has-theme-light-blue">
          <div className="loader-icon">
            <img src="/assets/images/Main-images/LOGO.jpeg" alt="Western Bearing Logo" style={{ maxHeight: '40px', width: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader

