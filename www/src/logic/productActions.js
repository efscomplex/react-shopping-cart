/* eslint-disable import/prefer-default-export */
import ProductMock from '../__mocks__/product'

export function getProductById(id) {
   return ProductMock.find((product) => product.id === id)
}
