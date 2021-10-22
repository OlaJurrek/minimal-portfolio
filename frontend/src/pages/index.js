import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <p>{data.allStrapiQuote.edges[0].node.cite}</p>
    </Layout>
  );
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
