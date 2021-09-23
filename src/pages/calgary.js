import * as React from "react"

import Layout from "../components/layout"
import CalgaryLanding from "../components/calgary-landing"
import { useIntl } from "gatsby-plugin-react-intl"
import Seo from "../components/seo"

const CalgaryPage = () => {
  const intl = useIntl()
  return (
  <Layout>
  <Seo
    lang={intl.locale}
    title={intl.formatMessage({ id: "calgary_landing.title" })}
    keywords={[`snow rodeo`, 'Calgary world cup', 'halfpipe', `freestyle canada`, `freestyle events`]}
  />
  <CalgaryLanding />
</Layout>
)
}

export default CalgaryPage