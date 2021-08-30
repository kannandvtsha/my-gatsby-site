import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'


const BlogPage = ({ data }) => {

  console.log("data ", data);
  
  const nodes = data.allMdx.nodes;  
  const blogNodes = data.allContentfulPerson.nodes;

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
      {
        blogNodes.map((blog) => {
          return blog.blog_post.map((post) => (
            <article key={post.id}>
                <h2>
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p>Posted: {post.publishDate}</p>
          </article>
          ))
        })
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
    allContentfulPerson(sort: {fields: blog_post___publishDate, order: DESC}) {
      nodes {
        blog_post {
          id
          slug
          title
          publishDate(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

export default BlogPage