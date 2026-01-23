// Script to convert HTML files to React components
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const htmlDir = path.join(__dirname, 'Western Bearning-html-package', 'Western Bearning-ltr')
const pagesDir = path.join(__dirname, 'src', 'pages')

// Ensure pages directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true })
}

// Function to convert HTML to JSX
function convertHtmlToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/href="([^"]+)\.html"/g, (match, page) => {
      const route = page === 'index' ? '/' : `/${page.replace(/-/g, '-')}`
      return `href="${route}"`
    })
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/data-background="assets\//g, 'data-background="/assets/')
    .replace(/href="assets\//g, 'href="/assets/')
}

// Function to extract main content from HTML
function extractMainContent(htmlContent) {
  const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  if (mainMatch) {
    return mainMatch[1].trim()
  }
  return ''
}

// Function to convert filename to component name
function filenameToComponentName(filename) {
  return filename
    .replace(/\.html$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// Function to convert filename to route path
function filenameToRoute(filename) {
  const name = filename.replace(/\.html$/, '')
  if (name === 'index') return '/'
  return `/${name.replace(/-/g, '-')}`
}

// Read all HTML files
const htmlFiles = fs.readdirSync(htmlDir).filter(file => file.endsWith('.html') && !file.includes('unicode') && !file.includes('symbol'))

console.log(`Found ${htmlFiles.length} HTML files to convert`)

// Generate React components
htmlFiles.forEach(file => {
  const htmlPath = path.join(htmlDir, file)
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8')
  const mainContent = extractMainContent(htmlContent)
  const componentName = filenameToComponentName(file)
  const routePath = filenameToRoute(file)
  
  if (!mainContent) {
    console.log(`Skipping ${file} - no main content found`)
    return
  }

  const jsxContent = convertHtmlToJsx(mainContent)
  
  // Escape the HTML content properly for template literal
  const escapedContent = jsxContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
  
  const componentCode = `import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'

function ${componentName}() {
  useSwiper()

  useEffect(() => {
    // Page-specific initialization if needed
  }, [])

  const htmlContent = \`${escapedContent}\`

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}

export default ${componentName}
`

  const outputPath = path.join(pagesDir, `${componentName}.jsx`)
  fs.writeFileSync(outputPath, componentCode, 'utf-8')
  console.log(`Created: ${componentName}.jsx`)
})

console.log('\nConversion complete!')
console.log('Note: You may need to manually fix some JSX syntax issues.')

