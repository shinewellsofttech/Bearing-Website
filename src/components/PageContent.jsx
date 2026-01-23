import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'

// Base component for pages that need to render HTML content
function PageContent({ children, className = '' }) {
  useSwiper()

  useEffect(() => {
    // Initialize any page-specific scripts here
    // The useScripts hook in Layout should handle most initialization
  }, [])

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default PageContent

