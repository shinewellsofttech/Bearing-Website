// Script to copy assets from HTML package to public folder
const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, 'Western Bearning-html-package', 'main-pkg', 'assets')
const destDir = path.join(__dirname, 'public', 'assets')

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true })
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      )
    })
  } else {
    if (!fs.existsSync(path.dirname(dest))) {
      fs.mkdirSync(path.dirname(dest), { recursive: true })
    }
    fs.copyFileSync(src, dest)
  }
}

if (fs.existsSync(sourceDir)) {
  console.log('Copying assets...')
  copyRecursiveSync(sourceDir, destDir)
  console.log('Assets copied successfully!')
} else {
  console.log('Source assets directory not found. Please ensure Western Bearning-html-package/main-pkg/assets exists.')
}

