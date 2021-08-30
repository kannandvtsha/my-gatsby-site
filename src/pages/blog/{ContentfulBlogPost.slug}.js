import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  
  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      <p>{data.contentfulBlogPost.publishDate}</p>
      <p>{data.contentfulBlogPost.body.body}</p>
    </Layout>
  )
}

export const query = graphql`
    query ($id: String){
        contentfulBlogPost(id: {eq: $id}) {
        title
        publishDate(formatString: "MMMM D, YYYY")
        body {
            body
        }
        }
    }
`

export default BlogPost