import { gql } from "@apollo/client";

const EXAMPLE_QUERY = gql`
  query ExampleQuery {
    stores(limit: 5) {
      id
    }
  }
`;

export { EXAMPLE_QUERY };
