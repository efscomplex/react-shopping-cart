import { Label } from './label'

export type Size = number | 'XS' | 'S' | 'M' | 'X' | 'L' | 'XL' | '2XL'

export interface Product {
   name: string
   branch: string
   description: string
   size: Size[]
   color: String[]
   priceBefore: number
   priceNow: number
   images: string[]
   id: string
   categories: Label[]
   keywords: string[]
}
