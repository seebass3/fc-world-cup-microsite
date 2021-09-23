import * as React from "react"

import Layout from "../components/layout"
import RelaisLanding from "../components/relais-landing"
import { useIntl } from "gatsby-plugin-react-intl"
import Seo from "../components/seo"

const LeRelaisPage = () => {
  const intl = useIntl()
  return (
  <Layout>
  <Seo
    lang={intl.locale}
    title={intl.formatMessage({ id: "title" })}
    keywords={[`world cups`, `freestyle canada`, `freestyle events`]}
  />
  <RelaisLanding />
</Layout>
)
}

export default LeRelaisPage