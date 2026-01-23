// Utility function to convert HTML strings to JSX-compatible format
export function htmlToJsx(htmlString) {
  if (!htmlString) return ''

  return htmlString
    // Convert class to className
    .replace(/\sclass=/g, ' className=')
    // Convert for to htmlFor
    .replace(/\sfor=/g, ' htmlFor=')
    // Convert self-closing tags
    .replace(/<img([^>]*?)>/g, '<img$1 />')
    .replace(/<input([^>]*?)>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    // Convert href="javascript:void(0)" to onClick handlers
    .replace(/href="javascript:void\(0\)"/g, 'href="#" onClick={(e) => e.preventDefault()}')
    // Convert data attributes (keep as is, they're valid in JSX)
    // Remove script tags
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    // Remove style tags (we'll use CSS files)
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
}

// Extract main content from HTML (between <main> tags or between header and footer)
export function extractMainContent(htmlString) {
  if (!htmlString) return ''

  // Try to find content between <main> tags
  const mainMatch = htmlString.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  if (mainMatch) {
    return mainMatch[1]
  }

  // If no main tag, try to find content between header and footer
  const headerEnd = htmlString.indexOf('</header>')
  const footerStart = htmlString.indexOf('<footer')
  
  if (headerEnd !== -1 && footerStart !== -1) {
    return htmlString.substring(headerEnd + 9, footerStart)
  }

  // Fallback: return everything between body tags
  const bodyMatch = htmlString.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  if (bodyMatch) {
    // Remove header and footer sections
    let content = bodyMatch[1]
    content = content.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
    content = content.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
    return content
  }

  return ''
}

