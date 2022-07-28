import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hello, I'm Dana and I'm going through a Gatsby tutorial.</p>
      <StaticImage
        alt="Me, Dana Lee"
        src="../images/Dana_Headshot.jpg"
      />
    </Layout>
  )
}

export default AboutPage