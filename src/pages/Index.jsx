import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function Index() {
  useSwiper()
  useScripts()

  // This component will load the HTML content from the original index.html
  // For now, it's a placeholder - the actual content will be added
  return (
    <>
      {/* Main content from index.html will be rendered here */}
      {/* The HTML content is very large, so we'll use dangerouslySetInnerHTML */}
      <div>
        <p>Index page content will be loaded here</p>
        <p>Note: Due to the large size of HTML files, we recommend using the convert-pages.js script to generate all components.</p>
      </div>
    </>
  )
}

export default Index
