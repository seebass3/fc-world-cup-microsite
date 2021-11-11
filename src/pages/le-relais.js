import * as React from "react"

import Layout from "../components/layout"
import RelaisLanding from "../components/relais-landing"
import RelaisInfo from "../components/relais-info"
import { useIntl } from "gatsby-plugin-react-intl"
import Seo from "../components/seo"

const LeRelaisPage = () => {
  const intl = useIntl()
  return (
  <Layout>
   <Seo
                lang={intl.locale}
                title={intl.formatMessage({id: "relais_info.sub_header"})}
                decription={intl.formatMessage({id: "relais_info.text"})}
                keywords={[
                'le relais world cup',
                'le relais',
                'moguls',
                'freestyle canada',
                'freestyle events'
            ]}/>
  <RelaisLanding />
  <RelaisInfo />
</Layout>
)
}

export default LeRelaisPage