import React, { useState, useEffect } from 'react'
import fetchData from '../../../services/fetchData'

interface Props {
   url: string;
   template?: React.FC<{data: any}>;
   method?: string;
   fallback?: JSX.Element;
   filter?: <T>(data: T) => T;
   children?: (data: any) => JSX.Element;
   [prop: string]: any;
}

const identity = (data: any) => data
function Fetch(
   { url, method = 'GET', filter= identity, template: Template, fallback, children, ...props }: Props)
{
   const [data, setData] = useState(undefined)
   const [loading, setLoading] = useState(true)

   const callback = (value: any) => {
      setData(() => value)
      setLoading(() => false)
   }
   useEffect(() => {
      setLoading(()=>true)
      fetchData(url, callback, method)
   }, [method, url])

   if (children) return children(data)

   return (
      <div {...props}>
         { loading
            ? fallback
            : Template && <Template data={filter(data)}/>
         }
      </div>
   )
}

export default Fetch
export { Fetch }