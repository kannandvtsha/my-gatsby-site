import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  
  const nodes = data.allFile.nodes;  

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {
        nodes.map((node) => (
            <li key={node.name}>
                {node.name}
            </li>
        ))
      }  
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`

console.log(' query ', query);
export default BlogPage