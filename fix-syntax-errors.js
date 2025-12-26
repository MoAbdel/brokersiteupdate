const fs = require('fs');
const path = require('path');

function findAllPageTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findAllPageTsxFiles(fullPath, files);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixSyntaxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix pattern 1: "description: seoData.About.descriptionpath: '/about',"
  const pattern1 = /description:\s*([^,\n]+)path:\s*'([^']+)'/g;
  if (pattern1.test(content)) {
    content = content.replace(pattern1, "description: $1,\n  alternates: {\n    canonical: 'https://www.mothebroker.com$2',\n  }");
    modified = true;
  }

  // Fix pattern 2: Missing comma before alternates
  const pattern2 = /description:\s*'([^']+)'\s+alternates:/g;
  if (pattern2.test(content)) {
    content = content.replace(pattern2, "description: '$1',\n  alternates:");
    modified = true;
  }

  // Fix pattern 3: Missing comma before openGraph
  const pattern3 = /description:\s*'([^']+)'openGraph:/g;
  if (pattern3.test(content)) {
    content = content.replace(pattern3, "description: '$1',\n  openGraph:");
    modified = true;
  }

  // Fix pattern 4: Missing comma before other properties
  const pattern4 = /description:\s*'([^']+)'\s+([a-zA-Z]+):/g;
  if (pattern4.test(content)) {
    content = content.replace(pattern4, "description: '$1',\n  $2:");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed syntax errors in: ${filePath}`);
    return true;
  }
  
  return false;
}

// Find and fix all page.tsx files
const appDir = path.join(__dirname, 'app');
const files = findAllPageTsxFiles(appDir);

console.log(`Found ${files.length} page.tsx files to check...`);

let fixedCount = 0;

for (const file of files) {
  try {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed syntax errors in ${fixedCount} files.`);
