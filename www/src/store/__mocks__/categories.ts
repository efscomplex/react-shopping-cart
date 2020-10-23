import { Category } from '../../types/category'

const categories: Category[] = [
   {
      name: 'infantil',
      fields: ['niño', 'niña'],
      image:
         'https://images.unsplash.com/photo-1523305420284-b4141589a131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
   },
   {
      name: 'deporte',
      fields: ['paddel', 'tennis', 'running', 'ciclismo'],
      image:
         'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
   },
   {
      name: 'calzado',
      fields: ['niño', 'niña', 'hombre', 'mujer'],
      image:
         'https://images.unsplash.com/photo-1568688574210-419316c9db5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
   },
   {
      name: 'hogar',
      fields: [
         'ver todo',
         'iluminación',
         'cocina',
         'salón y comedor',
         'dormitorio',
      ],
      image:
         'https://images.unsplash.com/photo-1506812779316-934cef283429?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
   },
   {
      name: 'electrónica',
      fields: [
         'ver todo',
         'telefonía',
         'informática',
         'entretenimiento y deporte',
      ],
      image:
         'https://images.unsplash.com/photo-1569331846241-da35669c3ce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
   },
   {
      name: 'cosmética y salud',
      fields: ['ver todo', 'perfumes y belleza', 'salud y masages'],
      image:
         'https://images.unsplash.com/photo-1599030337145-5bec28bee393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
   },
]
export default categories
export { categories }
