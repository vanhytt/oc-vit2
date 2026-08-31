#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const SITE_KEY = 'hyq-hardwares-cn-e8f3a1b2';
const PAGE_KEY = 'root-a4d2c9e1';
const TARGET_URL = 'https://www.hyq-hardwares.cn/';

const screenshotDir = path.join(projectRoot, 'docs', 'design-references', SITE_KEY, PAGE_KEY);
const researchDir = path.join(projectRoot, 'docs', 'research', SITE_KEY, PAGE_KEY);

// Viewport configurations for different device sizes
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

// Ensure directories exist
function ensureDirectories() {
  [screenshotDir, researchDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Scroll to bottom of page gradually and take screenshots
async function scrollAndCapture(page, screenshotPath) {
  console.log(`  📸 Capturando página em: ${screenshotPath}`);
  
  // Get page height
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`  📏 Altura da página: ${pageHeight}px`);
  
  // Scroll to top first
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));
  
  // Take screenshot of top
  await page.screenshot({ path: `${screenshotPath}-top.png`, fullPage: false });
  
  // Scroll middle
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: `${screenshotPath}-middle.png`, fullPage: false });
  
  // Scroll bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: `${screenshotPath}-bottom.png`, fullPage: false });
  
  // Full page screenshot
  await page.screenshot({ path: `${screenshotPath}-full.png`, fullPage: true });
  
  console.log(`  ✅ Screenshots salvos: ${screenshotPath}-*.png`);
}


// Extract design tokens from computed styles
async function extractDesignTokens(page) {
  console.log('\n🎨 Extraindo design tokens...');
  
  const tokens = await page.evaluate(() => {
    const tokens = {
      colors: {},
      typography: {},
      spacing: {},
      borderRadius: {},
      shadows: {},
    };
    
    // Sample elements to extract colors from
    const elements = document.querySelectorAll('body, header, nav, button, a, p, h1, h2, h3, h4, h5, h6, div[class*="bg"], div[class*="text"]');
    
    const seenColors = new Set();
    const seenFonts = new Set();
    
    elements.forEach(el => {
      const computed = window.getComputedStyle(el);
      
      // Collect colors
      const bgColor = computed.backgroundColor;
      const textColor = computed.color;
      const borderColor = computed.borderColor;
      
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') seenColors.add(`bg: ${bgColor}`);
      if (textColor) seenColors.add(`text: ${textColor}`);
      if (borderColor && borderColor !== 'rgba(0, 0, 0, 0)') seenColors.add(`border: ${borderColor}`);
      
      // Collect typography
      const fontFamily = computed.fontFamily;
      const fontSize = computed.fontSize;
      const fontWeight = computed.fontWeight;
      
      if (fontFamily) seenFonts.add(fontFamily);
      if (fontSize) tokens.typography[fontSize] = {
        fontFamily,
        fontWeight,
      };
      
      // Border radius
      const br = computed.borderRadius;
      if (br && br !== '0px') tokens.borderRadius[br] = true;
    });
    
    tokens.colors.observed = Array.from(seenColors);
    tokens.typography.families = Array.from(seenFonts);
    
    return tokens;
  });
  
  return tokens;
}

// Extract HTML source
async function extractHTML(page) {
  console.log('\n📄 Extraindo HTML...');
  const html = await page.content();
  return html;
}

// Extract component structure
async function extractComponents(page) {
  console.log('\n🧩 Extraindo componentes...');
  
  const components = await page.evaluate(() => {
    const componentMap = {};
    
    // Header
    const header = document.querySelector('header');
    if (header) {
      componentMap.header = {
        html: header.outerHTML.substring(0, 500),
        classes: header.className,
        children: header.children.length,
      };
    }
    
    // Navigation
    const nav = document.querySelector('nav');
    if (nav) {
      componentMap.navigation = {
        html: nav.outerHTML.substring(0, 500),
        classes: nav.className,
        links: Array.from(nav.querySelectorAll('a')).map(a => a.textContent.trim()),
      };
    }
    
    // Buttons
    const buttons = document.querySelectorAll('button, a[class*="button"]');
    componentMap.buttons = Array.from(buttons).slice(0, 5).map(btn => ({
      text: btn.textContent.trim(),
      classes: btn.className,
      type: btn.tagName,
    }));
    
    // Cards/Sections
    const sections = document.querySelectorAll('section, article, div[class*="card"]');
    componentMap.sections = Array.from(sections).slice(0, 5).map(sec => ({
      tag: sec.tagName,
      classes: sec.className,
      children: sec.children.length,
    }));
    
    // Forms
    const forms = document.querySelectorAll('form, input, textarea, select');
    componentMap.forms = Array.from(forms).slice(0, 3).map(form => ({
      tag: form.tagName,
      type: form.type || form.name,
      classes: form.className,
    }));
    
    return componentMap;
  });
  
  return components;
}

// Extract metadata and links
async function extractMetadata(page) {
  console.log('\n📋 Extraindo metadados...');
  
  const metadata = await page.evaluate(() => {
    const meta = {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || '',
      images: Array.from(document.querySelectorAll('img')).slice(0, 10).map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.width,
        height: img.height,
      })),
      links: Array.from(document.querySelectorAll('a'))
        .map(a => ({ href: a.href, text: a.textContent.trim() }))
        .filter((link, idx, arr) => idx === arr.findIndex(l => l.href === link.href))
        .slice(0, 20),
    };
    return meta;
  });
  
  return metadata;
}

// Main execution
async function main() {
  console.log('🚀 Iniciando scraping do website HYQ Hardwares...\n');
  console.log(`📍 URL: ${TARGET_URL}`);
  console.log(`📂 Screenshots: ${screenshotDir}`);
  console.log(`📂 Pesquisa: ${researchDir}\n`);
  
  ensureDirectories();
  
  let browser;
  
  try {
    // Launch browser with anti-detection options
    console.log('🌐 Iniciando navegador com opções anti-detecção...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled',
      ],
    });
    
    const allTokens = {};
    const allComponents = {};
    const allMetadata = {};
    let mainHTML = '';
    
    // Process each viewport
    for (const viewport of viewports) {
      console.log(`\n📱 Capturando ${viewport.name} (${viewport.width}x${viewport.height})...`);
      
      const page = await browser.newPage();
      await page.setViewport(viewport);
      
      // Set realistic user agent
      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
      );
      
      // Set realistic headers
      await page.setExtraHTTPHeaders({
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Referer': 'https://www.google.com/',
      });
      
      try {
        // Navigate to page
        console.log(`  ⏳ Carregando ${TARGET_URL}...`);
        await page.goto(TARGET_URL, { 
          waitUntil: 'networkidle2',
          timeout: 60000,
        });
        
        // Wait for main content
        await new Promise(r => setTimeout(r, 2000));
        
        // Capture screenshots
        const screenshotPath = path.join(screenshotDir, viewport.name);
        await scrollAndCapture(page, screenshotPath);
        
        // Extract data
        const tokens = await extractDesignTokens(page);
        const components = await extractComponents(page);
        const metadata = await extractMetadata(page);
        
        allTokens[viewport.name] = tokens;
        allComponents[viewport.name] = components;
        allMetadata[viewport.name] = metadata;
        
        // Get HTML on desktop view
        if (viewport.name === 'desktop') {
          mainHTML = await extractHTML(page);
        }
        
      } catch (error) {
        console.error(`  ❌ Erro capturando ${viewport.name}:`, error.message);
      } finally {
        await page.close();
      }
    }
    
    // Save extracted data
    console.log('\n💾 Salvando dados extraídos...');
    
    // Save design tokens
    fs.writeFileSync(
      path.join(researchDir, 'DESIGN_TOKENS.json'),
      JSON.stringify(allTokens, null, 2)
    );
    console.log('  ✅ Design tokens salvos');
    
    // Save components
    fs.writeFileSync(
      path.join(researchDir, 'COMPONENTS.json'),
      JSON.stringify(allComponents, null, 2)
    );
    console.log('  ✅ Componentes salvos');
    
    // Save metadata
    fs.writeFileSync(
      path.join(researchDir, 'METADATA.json'),
      JSON.stringify(allMetadata, null, 2)
    );
    console.log('  ✅ Metadados salvos');
    
    // Save HTML
    fs.writeFileSync(
      path.join(researchDir, 'source.html'),
      mainHTML
    );
    console.log('  ✅ HTML fonte salvo');
    
    // Create summary
    const summary = {
      url: TARGET_URL,
      timestamp: new Date().toISOString(),
      viewports: viewports.map(v => v.name),
      screenshotsDir: screenshotDir,
      researchDir: researchDir,
      extractedFiles: [
        'DESIGN_TOKENS.json',
        'COMPONENTS.json',
        'METADATA.json',
        'source.html',
        'desktop-top.png',
        'desktop-middle.png',
        'desktop-bottom.png',
        'desktop-full.png',
        'tablet-top.png',
        'tablet-middle.png',
        'tablet-bottom.png',
        'tablet-full.png',
        'mobile-top.png',
        'mobile-middle.png',
        'mobile-bottom.png',
        'mobile-full.png',
      ],
    };
    
    fs.writeFileSync(
      path.join(researchDir, 'EXTRACTION_SUMMARY.json'),
      JSON.stringify(summary, null, 2)
    );
    console.log('  ✅ Resumo de extração salvo');
    
    console.log('\n✨ Scraping concluído com sucesso!');
    console.log(`\n📊 Resumo:`);
    console.log(`  - Screenshots: ${viewports.length} viewports capturados`);
    console.log(`  - Tokens de design extraídos`);
    console.log(`  - Componentes identificados`);
    console.log(`  - Tamanho HTML: ${(mainHTML.length / 1024).toFixed(2)} KB`);
    console.log(`\n📂 Verifique os arquivos em: ${researchDir}`);
    
  } catch (error) {
    console.error('❌ Erro durante scraping:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      console.log('\n🔒 Navegador fechado');
    }
  }
}

// Run
main().catch(console.error);

