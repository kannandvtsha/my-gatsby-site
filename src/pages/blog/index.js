import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'


const BlogPage = ({ data }) => {
  
  const nodes = data.allMdx.nodes;  

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {
        nodes.map((node) => (
            <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }  
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

console.log(' query ', query);
export default BlogPage