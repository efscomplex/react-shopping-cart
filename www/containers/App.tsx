import * as React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
function App({ className }: any) {
  return (
    <div className={className}>
      <h1>hello world!!</h1>
      <ProductList />
    </div>
  );
}

export default styled(App)`
  color: red;
`;
