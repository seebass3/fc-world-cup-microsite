import * as React from "react"

import Layout from "../components/layout"
import WinsportLanding from "../components/winsport-landing"
import WinsportInfo from "../components/winsport-info"
import { useIntl } from "gatsby-plugin-react-intl"
import Seo from "../components/seo"

const WinsportPage = () => {
  const intl = useIntl()
  return (
  <Layout>
  <Seo
    lang={intl.locale}
    title={intl.formatMessage({ id: "winsport_landing.title" })}
    keywords={[`snow rodeo`, 'Winsport world cup', 'Calgary', 'halfpipe', `freestyle canada`, `freestyle events`]}
  />
  <WinsportLanding />
  <WinsportInfo />
</Layout>
)
}

export default WinsportPage