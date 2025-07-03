import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PlaybookMetadata {
  title: string
  subtitle: string
  description: string
  author: string
  readTime: string
  downloadCount: string
  category: string
  lastUpdated: string
  slug: string
  published: boolean
}

export interface PlaybookContent {
  metadata: PlaybookMetadata
  content: string
}

const contentDirectory = path.join(process.cwd(), 'content/playbooks')

export function getAllPlaybooks(): PlaybookMetadata[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    const playbooks = fileNames
      .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(name => {
        const slug = name.replace(/\.(md|mdx)$/, '')
        const fullPath = path.join(contentDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        return {
          ...data,
          slug,
        } as PlaybookMetadata
      })
      .filter(playbook => playbook.published !== false)
      .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())

    return playbooks
  } catch (error) {
    console.error('Error reading playbooks directory:', error)
    return []
  }
}

export function getPlaybookBySlug(slug: string): PlaybookContent | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    let fileContents: string
    
    try {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } catch (error) {
      // Try .mdx extension if .md doesn't exist
      const mdxPath = path.join(contentDirectory, `${slug}.mdx`)
      fileContents = fs.readFileSync(mdxPath, 'utf8')
    }
    
    const { data, content } = matter(fileContents)
    
    return {
      metadata: {
        ...data,
        slug,
      } as PlaybookMetadata,
      content,
    }
  } catch (error) {
    console.error(`Error reading playbook ${slug}:`, error)
    return null
  }
}

export function getPlaybookSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    return fileNames
      .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(name => name.replace(/\.(md|mdx)$/, ''))
  } catch (error) {
    console.error('Error reading playbooks directory:', error)
    return []
  }
}
