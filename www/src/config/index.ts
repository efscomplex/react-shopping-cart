import { Route, Theme } from "../types"

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

export const theme: Theme= {
   bg: 'rgb(240,240,240)',
   fg: 'transparent',
   color: 'rgb(80,80,80)'
}
export {
   routes,
   breaks
}