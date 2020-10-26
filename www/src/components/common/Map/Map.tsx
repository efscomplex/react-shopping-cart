import React, { Fragment } from 'react'
import { Props } from './propTypes'

const getKey = (num: number) => (Math.random() + num).toString()

const Map = ({
   as,
   template: Template,
   from,
   children,
   props,
   ...restProps
}: Props) => {
   const childs = from.map((item: Object, i: number) => (
      <Template key={getKey(i)} {...item} {...restProps} />
   ))

   return React.createElement(as || Fragment, (as && props) || null, childs)
}

export default Map
export { Map }
