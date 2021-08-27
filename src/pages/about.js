// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const AboutPage = () => {
  return (    
    <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <StaticImage
        alt="It's me!, Kannan D V"
        src="../images/IMG_20181226_203249.jpg"
      /> 
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage