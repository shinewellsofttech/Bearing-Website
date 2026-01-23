import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function HTMLContent({ htmlContent }) {
  useSwiper()
  useScripts()

  // Process HTML content for React
  const processHTML = (html) => {
    if (!html) return ''
    
    return html
      // Convert class to className
      .replace(/\sclass=/g, ' className=')
      // Convert for to htmlFor
      .replace(/\sfor=/g, ' htmlFor=')
      // Convert image paths
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/href="assets\//g, 'href="/assets/')
      // Convert data-background paths
      .replace(/data-background="assets\//g, 'data-background="/assets/')
      // Convert href links to React Router Links (basic conversion)
      .replace(/href="([^"]+\.html)"/g, (match, path) => {
        const route = path.replace('.html', '').replace('index', '')
        return `href="${route || '/'}"`
      })
      // Remove script tags (handled by useScripts)
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      // Remove style tags
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
  )
}

export default HTMLContent

