import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

const TremblantPartners = () => {
    const data = useStaticQuery(graphql `
    query tremblantPartners {
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
        mackenzie: file(relativePath: {eq: "partners/mackenzie.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 110)
          }
        }
        canada: file(relativePath: {eq: "partners/canada.jpeg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 105)
          }
        }
        b2ten: file(relativePath: {eq: "partners/b2ten.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 85)
          }
        }
        toyo: file(relativePath: {eq: "partners/toyo.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 110)
          }
        }
        buff: file(relativePath: {eq: "partners/buff.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 52)
          }
        }
        otp: file(relativePath: {eq: "partners/otp.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 72)
          }
        }
        auclair: file(relativePath: {eq: "partners/auclair.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 20)
          }
        }
        djo: file(relativePath: {eq: "partners/djo.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 60)
          }
        }
        quebec: file(relativePath: {eq: "partners/quebec.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 130)
          }
        }
        tremblant: file(relativePath: {eq: "partners/tremblant.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 50)
          }
        }
        tourismeTremblant: file(relativePath: {eq: "partners/tourisme-tremblant.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 50)
          }
        }
        fis: file(relativePath: {eq: "partners/fis-freestyle.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 130)
          }
        }
      }
`);

    const toyota = data.toyota.childImageSharp.gatsbyImageData;
    const anta = data.anta.childImageSharp.gatsbyImageData;
    const mackenzie = data.mackenzie.childImageSharp.gatsbyImageData;
    const canada = data.canada.childImageSharp.gatsbyImageData;
    const b2ten = data.b2ten.childImageSharp.gatsbyImageData;
    const toyo = data.toyo.childImageSharp.gatsbyImageData;
    const buff = data.buff.childImageSharp.gatsbyImageData;
    const otp = data.otp.childImageSharp.gatsbyImageData;
    const auclair = data.auclair.childImageSharp.gatsbyImageData;
    const djo = data.djo.childImageSharp.gatsbyImageData;
    const quebec = data.quebec.childImageSharp.gatsbyImageData;
    const tremblant = data.tremblant.childImageSharp.gatsbyImageData;
    const tourismeTremblant = data.tourismeTremblant.childImageSharp.gatsbyImageData;
    const fis = data.fis.childImageSharp.gatsbyImageData;

    return (
        <section id="partners" className="shadow-lg pt-4">
            <div className="text-center py-4">
                <h1><FormattedMessage id="partners"/></h1>
            </div>
            <div className="mx-auto px-4">
                <div
                    className="grid grid-cols-2 grid-rows-4 lg:grid-cols-7 lg:grid-rows-2 gap-x-5 justify-items-center items-center pb-6">
                    <a href="https://www.toyota.ca/toyota/en/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={toyota} alt="Toyota Logo"/></a>
                    <a href="http://en.anta.com/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={anta} alt="Anta Logo"/></a>
                    <a href="https://www.mackenzieinvestments.com/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={mackenzie} alt="Mackenzie Logo"/></a>
                    <a href="https://www.canada.ca/en.html" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={canada} alt="Canada Logo"/></a>
                    <a href="https://b2ten.com/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={b2ten} alt="B2Ten Logo"/></a>
                    <a href="https://www.toyotires.ca/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={toyo} alt="Toyo Tires Logo"/></a>
                    <a href="https://www.buff.com/ca/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={buff} alt="Buff Logo"/></a>
                    <a href="https://www.ownthepodium.org/en-CA/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={otp} alt="Own the Podium Logo"/></a>
                    <a href="https://auclair.com/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={auclair} alt="Auclair Logo"/></a>
                    <a href="https://www.djoglobal.com/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={djo} alt="DJO Logo"/></a>
                    <a href="https://www.quebec.ca/en/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={quebec} alt="Quebec Logo"/></a>
                    <a href="https://www.tremblant.ca/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={tremblant} alt="Le Relais Logo"/></a>
                    <a href="https://www.mont-tremblant.ca/" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={tourismeTremblant} alt="Le Relais Logo"/></a>
                    <a href="https://www.fis-ski.com/en/freestyle-freeski" rel="noopener noreferrer" to target="_blank"><GatsbyImage image={fis} alt="Fis Logo"/></a>
                </div>
            </div>
        </section>

    )
};

export default TremblantPartners;