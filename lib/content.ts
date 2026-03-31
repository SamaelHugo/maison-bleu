import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Product, Collection } from './types'

const contentDir = path.join(process.cwd(), 'content')

function readMdFiles<T>(dir: string): T[] {
  const fullPath = path.join(contentDir, dir)
  if (!fs.existsSync(fullPath)) return []
  const files = fs.readdirSync(fullPath).filter((f) => f.endsWith('.md'))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(fullPath, file), 'utf-8')
    const { data } = matter(raw)
    return data as T
  })
}

interface ContentDimensions {
  width?: string
  height?: string
  depth?: string
  raw?: string
}

interface ContentProduct {
  name: string
  slug: string
  price: number
  category: string
  collection: string
  description: string
  image: string
  images: string[]
  materials: string[]
  dimensions: ContentDimensions
}

function formatDimensions(dims: ContentDimensions | undefined): string {
  if (!dims) return ''
  if (dims.raw) return dims.raw
  if (dims.width && dims.depth && dims.height) {
    const w = dims.width.replace(' cm', '')
    const d = dims.depth.replace(' cm', '')
    const h = dims.height.replace(' cm', '')
    return `${w} x ${d} x ${h} cm`
  }
  return ''
}

export function getProducts(): Product[] {
  const items = readMdFiles<ContentProduct>('products')
  return items.map((item, i) => ({
    id: String(i + 1),
    slug: item.slug,
    name: item.name,
    price: item.price,
    category: item.category,
    collection: item.collection,
    description: item.description,
    materials: item.materials || [],
    dimensions: formatDimensions(item.dimensions),
    image: item.image,
    images: item.images || [item.image],
  }))
}

export function getCollections(): Collection[] {
  const items = readMdFiles<{ name: string; slug: string; description: string; image: string }>('furniture_collections')
  return items.map((item, i) => ({
    id: String(i + 1),
    name: item.name,
    slug: item.slug,
    description: item.description,
    image: item.image,
  }))
}

export function getPage(slug: string): { title: string; body: string } | null {
  const filePath = path.join(contentDir, 'pages', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { title: data.title || slug, body: content }
}
