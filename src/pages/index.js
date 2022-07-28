// Step 1: Import React
import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt = "Kirby"
        src= "https://assets.reedpopcdn.com/-1648039850821.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/-1648039850821.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
