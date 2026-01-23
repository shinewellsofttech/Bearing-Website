// Utility to convert HTML strings to React elements
// This is a helper for converting HTML content to JSX

export const convertHtmlToJsx = (htmlString) => {
  // Basic conversion - replace common HTML attributes to JSX
  return htmlString
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/href="([^"]+)\.html"/g, (match, path) => {
      // Convert .html links to React Router paths
      const route = path === 'index' ? '/' : `/${path}`
      return `href="${route}"`
    })
}

// Component to render HTML content safely
export const HtmlContent = ({ html, className }) => {
  if (!html) return null
  
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: convertHtmlToJsx(html) }}
    />
  )
}

