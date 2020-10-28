export const FILTER_BY_LABEL = gql`
   mutation filterProductsByLabel($label: String!) {
      filterByLabel(label: $label) {
         name
         branch
         images
      }
   }
`
