// Utility function to extract main content from HTML files
// This would be used by a Node.js script to extract content

export const extractMainContent = (htmlContent) => {
  // Extract content between <main> and </main> tags
  const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  if (mainMatch) {
    return mainMatch[1]
  }
  return ''
}

// Convert HTML attributes to JSX
export const convertToJsx = (html) => {
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/\s+onclick="([^"]+)"/g, (match, handler) => {
      // Convert onclick to onClick
      return ` onClick={() => { ${handler} }}`
    })
}

