import React, { Fragment } from 'react'
import { Props } from './propTypes'

const getKey = (num: number) => (Math.random() + num).toString()

const Map = ({
   as,
   template: Template,
   from,
   children,
   ...restProps
}: Props) => {
   const childs = from.map((item: Object, i: number) => (
      <Template key={getKey(i)} {...item} />
   ))
   const props = (as && restProps) || null

   return React.createElement(as || Fragment, props, childs)
}

export default Map
export { Map }
