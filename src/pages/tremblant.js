import * as React from "react"

import Layout from "../components/layout"
import TremblantLanding from "../components/tremblant-landing"
import TremblantInfo from "../components/tremblant-info"
import MogulSchedule from "../components/mogul-schedule"
import { useIntl } from "gatsby-plugin-react-intl"
import Seo from "../components/seo"

const TremblantPage = () => {
  const intl = useIntl()
  return (
  <Layout>
  <Seo
    lang={intl.locale}
    title={intl.formatMessage({ id: "title" })}
    keywords={[`world cups`, `freestyle canada`, `freestyle events`]}
  />
  <TremblantLanding />
  <TremblantInfo />
  <MogulSchedule />
</Layout>
)
}

export default TremblantPage