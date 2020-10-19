import Header from '../components/core/header/Header'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import ProductDetail from '../components/base/ProductDetail'
import '../components/base/ProductItem.module.scss'

function App({ className }) {
   return (
      <div className={className}>
         <Header />
         <div className="mainCard__container">
            <img
               src="https://img-es.prvstatic.com/front/get/photo/549400_-_images_-_products_-_29275929_-_templ1.jpg"
               alt="Abrigo Efecto Peludo Multicolor"
            ></img>
            <p className="text">Abrigo Efecto Peludo Multicolor</p>
         </div>
         <Switch>
            <Route path="/www/:productId" component={ProductDetail} />
         </Switch>
      </div>
   )
}

export default styled(App)`
   color: red;
`
