import React from "react"
import {FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({intl}) => (
    <Layout>
        <SEO lang={intl.locale} title={`404: ${intl.formatMessage({id: "title"})}`}/>
        <div className="container mx-auto flex flex-col justify-center p-10 h-hero">
            <h1>
                <FormattedMessage id="notfound.header"/>
            </h1>
            <p>
                <FormattedMessage id="notfound.description"/>
            </p>
            <Link to="https://freestylecanada.ski/">
            <button
                aria-label="button"
                className="mt-4 bg-fcPurple inline-block uppercase text-white font-ultra px-12 py-3">
                <FormattedMessage id="notfound.home"/>
            </button>
            </Link>
        </div>
    </Layout>
)

export default injectIntl(NotFoundPage)