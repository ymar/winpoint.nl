#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function createPlaybook() {
  console.log('🚀 Creating a new playbook...\n');

  const title = await askQuestion('Playbook title: ');
  const subtitle = await askQuestion('Subtitle: ');
  const description = await askQuestion('Description: ');
  const category = await askQuestion('Category (Playbook/Template/Scripts/Guide): ');
  const readTime = await askQuestion('Read time (e.g., "15 min read"): ');
  
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long' 
  });

  const frontmatter = `---
title: "${title}"
subtitle: "${subtitle}"
description: "${description}"
author: "Winpoint Team"
readTime: "${readTime}"
downloadCount: "0"
category: "${category}"
lastUpdated: "${currentDate}"
published: true
---

# ${title}

## Introduction

Write your introduction here...

## Main Content

Add your content sections here...

## Conclusion

Wrap up your playbook here...

---

*Ready to implement these strategies? Book a diagnostic call to discuss your specific situation.*`;

  const filePath = path.join(__dirname, '..', 'content', 'playbooks', `${slug}.md`);
  
  try {
    fs.writeFileSync(filePath, frontmatter, 'utf8');
    console.log(`\n✅ Playbook created successfully!`);
    console.log(`📁 File: ${filePath}`);
    console.log(`🔗 URL: /content-library/${slug}`);
    console.log(`\nYou can now edit the markdown file to add your content.`);
  } catch (error) {
    console.error('❌ Error creating playbook:', error.message);
  }

  rl.close();
}

createPlaybook();
