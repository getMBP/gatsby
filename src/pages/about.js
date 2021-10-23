import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>Come get at me bitch <Link to="/contact">Yeah get at me</Link> </p>
            </Layout>
        )
}

export default AboutPage