import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"



const IndexPage = () => {
  return (
     <Layout>
          <h1>Hello.</h1>
          <p>I'm patrick a full stack dude with a full stack plan</p>
          <p>Need me? <a href="/contact">Me</a></p>
          <p>Async link use Link to ... <Link to="/contact">Async Link!</Link> Always load links like this make sure you add import link to top of page</p>
     </Layout>
    )
}

export default IndexPage