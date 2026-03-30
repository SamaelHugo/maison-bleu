export interface Product {
  id: string
  slug: string
  name: string
  price: number
  category: string
  collection: string
  description: string
  materials: string[]
  dimensions: string
  image: string
  images: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Collection {
  id: string
  name: string
  description: string
  image: string
  slug: string
}
