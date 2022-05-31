import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/reset.scss"
import "../styles/main.scss"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <div>
      <h1>Welcome to this site.</h1>
      <div className="image-container">
        <StaticImage
          src="../images/city.jpg"
          loading="eager"
          width={352}
          height={220}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/meetup-1.jpg"
          loading="eager"
          width={352}
          height={220}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/meetup-2.jpg"
          loading="eager"
          width={352}
          height={220}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
