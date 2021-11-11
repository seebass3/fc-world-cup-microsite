import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"
import { GatsbyImage } from "gatsby-plugin-image";

const WinsportAthletes = ({intl}) => {
    const data = useStaticQuery(graphql ` 
    query winsportAthletes {
      cassie: file(relativePath: {eq: "winsport-athletes/cassie.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
        noah: file(relativePath: {eq: "winsport-athletes/noah.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
        rachael: file(relativePath: {eq: "winsport-athletes/rachael.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
         simon: file(relativePath: {eq: "winsport-athletes/simon.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
          brendan: file(relativePath: {eq: "winsport-athletes/brendan.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
           andrew: file(relativePath: {eq: "winsport-athletes/andrew.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
           amy: file(relativePath: {eq: "winsport-athletes/amy.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
         dylan: file(relativePath: {eq: "winsport-athletes/dylan.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
         evan: file(relativePath: {eq: "winsport-athletes/evan.jpg"}) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }      
       `)

    return (
        <section
            id="athletes"
            className="container mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
                <h1>
                    <FormattedMessage id="athletes"/>
                </h1>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.cassie.childImageSharp.gatsbyImageData}
                            alt="Cassie Sharpe"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Cassie Sharpe</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/cassie-sharpe/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.noah.childImageSharp.gatsbyImageData}
                            alt="Noah Bowman"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Noah Bowman</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/noah-bowman/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                    <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.rachael.childImageSharp.gatsbyImageData}
                            alt="Rachael Karker"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Rachael Karker</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/rachael-karker/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                    <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.simon.childImageSharp.gatsbyImageData}
                            alt="Simon d'Artois"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Simon d'Artois</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/simon-dartois/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                    <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.brendan.childImageSharp.gatsbyImageData}
                            alt="Brendan Mackay"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Brendan Mackay</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/brendan-mackay/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                    <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.andrew.childImageSharp.gatsbyImageData}
                            alt="Andrew Longino"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Andrew Longino</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/andrew-longino/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                    <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.amy.childImageSharp.gatsbyImageData}
                            alt="Amy Fraser"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Amy Fraser</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/amy-fraser/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                    <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.dylan.childImageSharp.gatsbyImageData}
                            alt="Dylan Marineau"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Dylan Marineau</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/dylan-marineau/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
                <div
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                    <GatsbyImage
                            className="object-center object-cover h-auto w-full"
                            image={data.evan.childImageSharp.gatsbyImageData}
                            alt="Evan Marineau"/>
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">Evan Marineau</p>
                        <a
                            class="bg-rodeoGold pt-1 text-white font-ultra mt-1 uppercase flex items-center justify-center w-48 h-8"
                            href="https://freestylecanada.ski/team/evan-marineau/"><FormattedMessage id="learn_more"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default injectIntl(WinsportAthletes)
