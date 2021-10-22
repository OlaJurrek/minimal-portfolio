import React from "react";

import { graphql } from "gatsby";

export default function Home({ data }) {
  return <div>{data.allStrapiQuote.edges[0].node.cite}</div>;
}

export const query = graphql`
  query QuotesQuery {
    allStrapiQuote {
      edges {
        node {
          blockquote
          cite
        }
      }
    }
  }
`;
