// Node.js script to convert HTML pages to React components
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const htmlDir = path.resolve(__dirname, 'Western Bearning-html-package', 'Western Bearning-ltr')
const pagesDir = path.resolve(__dirname, 'src', 'pages')

// Ensure pages directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true })
}

// Function to convert HTML filename to component name
function htmlToComponentName(htmlFile) {
  if (htmlFile === 'index.html') {
    return 'Index' // Will be mapped to Home
  }
  if (htmlFile === 'faq.html') {
    return 'FAQ' // Special case for FAQ
  }
  return htmlFile
    .replace('.html', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// Function to convert HTML filename to route path
function htmlToRoutePath(htmlFile) {
  const name = htmlFile.replace('.html', '')
  if (name === 'index') return '/'
  return '/' + name.replace(/-/g, '-')
}

// Function to extract main content from HTML
function extractMainContent(htmlContent) {
  // Try to find content between <main> tags
  const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  if (mainMatch) {
    return mainMatch[1]
  }

  // If no main tag, try to find content between header and footer
  const headerEnd = htmlContent.indexOf('</header>')
  const footerStart = htmlContent.indexOf('<footer')
  
  if (headerEnd !== -1 && footerStart !== -1) {
    return htmlContent.substring(headerEnd + 9, footerStart)
  }

  return ''
}

// Read all HTML files
const htmlFiles = fs.readdirSync(htmlDir).filter(file => 
  file.endsWith('.html') && 
  !file.includes('unicode') && 
  !file.includes('symbol')
)

console.log(`Found ${htmlFiles.length} HTML files to convert`)

// Generate components
htmlFiles.forEach(htmlFile => {
  const htmlPath = path.join(htmlDir, htmlFile)
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8')
  const mainContent = extractMainContent(htmlContent)
  let componentName = htmlToComponentName(htmlFile)
  let componentFile = path.join(pagesDir, `${componentName}.jsx`)
  
  // Map index.html to Home.jsx
  if (htmlFile === 'index.html') {
    componentName = 'Home'
    componentFile = path.join(pagesDir, 'Home.jsx')
  }

  // For index.html, always update Home.jsx
  if (htmlFile === 'index.html' && componentName === 'Index') {
    // Update Home.jsx instead
    const homeFile = path.join(pagesDir, 'Home.jsx')
    if (fs.existsSync(homeFile)) {
      console.log(`Updating Home.jsx from index.html`)
      // Continue to create/update
    }
  }
  
  // Skip if component already exists (to avoid overwriting manual edits)
  // But allow updating if it's a placeholder
  if (fs.existsSync(componentFile)) {
    const existingContent = fs.readFileSync(componentFile, 'utf-8')
    // Check if it's a placeholder (has "placeholder" or very short content)
    if (existingContent.includes('placeholder') || existingContent.length < 500) {
      console.log(`Updating ${componentName}.jsx (was a placeholder)`)
      // Continue to overwrite
    } else {
      console.log(`Skipping ${componentName}.jsx (already exists with content)`)
      return
    }
  }

  const componentCode = `import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function ${componentName}() {
  useSwiper()
  useScripts()

  // Process HTML content for React
  // Note: Keep 'class' as is for dangerouslySetInnerHTML (raw HTML, not JSX)
  const processHTML = (html) => {
    if (!html) return ''
    
    return html
      // Convert image paths
      .replace(/src="assets\\//g, 'src="/assets/')
      .replace(/href="assets\\//g, 'href="/assets/')
      // Convert data-background paths
      .replace(/data-background="assets\\//g, 'data-background="/assets/')
      // Convert href links to React Router paths
      .replace(/href="([^"]+\\.html)"/g, (match, path) => {
        let route = path.replace('.html', '')
        if (route === 'index') route = ''
        return \`href="\${route || '/'}"\`
      })
      // Remove script tags
      .replace(/<script[^>]*>[\\s\\S]*?<\\/script>/gi, '')
      // Remove style tags
      .replace(/<style[^>]*>[\\s\\S]*?<\\/style>/gi, '')
  }

  const htmlContent = \`${mainContent.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`

  return (
    <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
  )
}

export default ${componentName}
`

  fs.writeFileSync(componentFile, componentCode, 'utf-8')
  console.log(`Created ${componentName}.jsx`)
})

console.log('\nConversion complete!')
console.log('Next step: Update App.jsx with all routes')

