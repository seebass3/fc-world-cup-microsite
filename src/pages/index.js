import * as React from "react"

import Layout from "../components/layout"
import Landing from "../components/landing"
import { useIntl } from "gatsby-plugin-react-intl"
import Seo from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
  <Layout>
  <Seo
    lang={intl.locale}
    title={intl.formatMessage({ id: "title" })}
    keywords={[`world cups`, `freestyle canada`, `freestyle events`]}
  />
  <Landing />
</Layout>
)
}

export default IndexPage