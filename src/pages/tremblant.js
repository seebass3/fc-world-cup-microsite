import * as React from "react"

import Layout from "../components/layout"
import TremblantLanding from "../components/tremblant-landing"
import TremblantInfo from "../components/tremblant-info"
import { useIntl } from "gatsby-plugin-react-intl"
import Seo from "../components/seo"

const TremblantPage = () => {
  const intl = useIntl()
  return (
  <Layout>
  <Seo
                lang={intl.locale}
                title={intl.formatMessage({id: "tremblant_info.sub_title"})}
                decription={intl.formatMessage({id: "tremblant_info.text"})}
                keywords={[
                'tremblant world cup',
                'tremblant',
                'moguls',
                'freestyle canada',
                'freestyle events'
            ]}/>
  <TremblantLanding />
  <TremblantInfo />
</Layout>
)
}

export default TremblantPage