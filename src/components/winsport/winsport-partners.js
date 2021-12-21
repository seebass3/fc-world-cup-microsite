import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

const WinsportPartners = () => {
    const data = useStaticQuery(graphql `
    query winsportPartners {
        toyota: file(relativePath: {eq: "partners/toyota.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 82)
          }
        }
        anta: file(relativePath: {eq: "partners/anta.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 82)
          }
        }
        flags: file(relativePath: {eq: "partners/flags.jpeg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 110)
          }
        }
        snowboard: file(relativePath: {eq: "partners/snowboard.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 100)
          }
        }
        alberta: file(relativePath: {eq: "partners/alberta.jpeg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 110)
          }
        }
        canada: file(relativePath: {eq: "partners/canada.jpeg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 84)
          }
        }
        winsport: file(relativePath: {eq: "partners/winsport.jpeg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 120)
          }
        }
        calgary: file(relativePath: {eq: "partners/calgary.jpeg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 35)
          }
        }
        fis: file(relativePath: {eq: "partners/fis.jpeg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 40)
          }
        }
      }
`);

    const toyota = data.toyota.childImageSharp.gatsbyImageData;
    const anta = data.anta.childImageSharp.gatsbyImageData;
    const flags = data.flags.childImageSharp.gatsbyImageData;
    const snowboard = data.snowboard.childImageSharp.gatsbyImageData;
    const alberta = data.alberta.childImageSharp.gatsbyImageData;
    const canada = data.canada.childImageSharp.gatsbyImageData;
    const winsport = data.winsport.childImageSharp.gatsbyImageData;
    const calgary = data.calgary.childImageSharp.gatsbyImageData;
    const fis = data.fis.childImageSharp.gatsbyImageData;

    return (
        <section id="partners" className="shadow-lg pt-4">
            <div className="text-center py-4">
                <h1><FormattedMessage id="partners"/></h1>
            </div>
            <div className="mx-auto px-4">
                <div
                    className="grid grid-cols-2 grid-rows-4 lg:grid-cols-9 lg:grid-rows-1 gap-x-5 justify-items-center items-center pb-6">
                    <a href="https://www.toyota.ca/toyota/en/" rel="noopener noreferrer" target="_blank"><GatsbyImage image={toyota} alt="Toyota Logo"/></a>
                    <a href="http://en.anta.com/" rel="noopener noreferrer" target="_blank"><GatsbyImage image={anta} alt="Anta Logo"/></a>
                    <a href="https://www.flagsunlimited.com/" rel="noopener noreferrer" target="_blank"><GatsbyImage image={flags} alt="Flags Unlimited Logo"/></a>
                    <a href="https://www.canadasnowboard.ca/en/" rel="noopener noreferrer" target="_blank"><GatsbyImage image={snowboard} alt="Canada Snowboard Logo"/></a>
                    <a href="https://www.alberta.ca/index.aspx" rel="noopener noreferrer" target="_blank"><GatsbyImage image={alberta} alt="Alberta Logo"/></a>
                    <a href="https://www.canada.ca/home.html" rel="noopener noreferrer" target="_blank"><GatsbyImage image={canada} alt="Canada Logo"/></a>
                    <a href="http://www.winsportcanada.ca/" rel="noopener noreferrer" target="_blank"><GatsbyImage image={winsport} alt="Winsport Logo"/></a>
                    <a href="https://www.visitcalgary.com/" rel="noopener noreferrer" target="_blank"><GatsbyImage image={calgary} alt="Calgary Logo"/></a>
                    <a href="https://www.fis-ski.com/en/freestyle-freeski" rel="noopener noreferrer" target="_blank"><GatsbyImage image={fis} alt="Fis Logo"/></a>
                </div>
            </div>
        </section>

    )
};

export default WinsportPartners;