// Utility to create React page components from HTML content
// This will be used to generate components programmatically

export function createPageFromHTML(htmlContent, componentName) {
  // Extract main content (between <main> tags)
  const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  let mainContent = mainMatch ? mainMatch[1] : ''
  
  // Remove script tags
  mainContent = mainContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  
  // Convert class to className
  mainContent = mainContent.replace(/\sclass=/g, ' className=')
  
  // Convert href="javascript:void(0)" 
  mainContent = mainContent.replace(/href="javascript:void\(0\)"/g, 'href="#" onClick={(e) => e.preventDefault()}')
  
  // Convert image src paths
  mainContent = mainContent.replace(/src="assets\//g, 'src="/assets/')
  
  // Convert data-background paths
  mainContent = mainContent.replace(/data-background="assets\//g, 'data-background="/assets/')
  
  return `
import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function ${componentName}() {
  useSwiper()
  useScripts()

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${mainContent.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\` }} />
    </>
  )
}

export default ${componentName}
`
}

