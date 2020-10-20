import { Route } from "../types/route"

const routes: Route[] = [
   { label: 'Category' },
   { label: 'moda & beauty' },
   { label: 'infantil' },
   { label: 'hogar & tech' },
   { label: 'viajes' },
]

const breaks = new Map(
   [
      ['small', '576px'],
      ['medium', '768px'],
      ['large', '992px'],
      ['x-large', '1200px'],
   ]
)

export {
   routes,
   breaks
}