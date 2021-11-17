import React, {useState} from 'react';
import {FormattedMessage} from "gatsby-plugin-react-intl";
import {GatsbyImage} from "gatsby-plugin-image";
import {useStaticQuery, graphql} from "gatsby";
import {Modal} from './modal';
import HalfpipeSchedule from './halfpipe-schedule';

const WinsportExtra = () => {
    const data = useStaticQuery(graphql `
    query winsportExtra{
      backgroundOne: file(relativePath: {eq: "covid-winsport.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      backgroundTwo: file(relativePath: {eq: "winsport-wc.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
        `)

    const bgImage = data.backgroundOne.childImageSharp.gatsbyImageData
    const bgImage2 = data.backgroundTwo.childImageSharp.gatsbyImageData

    const [hoveredLeft,
        setHoveredLeft] = useState(false);
    const toggleHoverLeft = () => setHoveredLeft(!hoveredLeft);

    const [hoveredRight,
        setHoveredRight] = useState(false);
    const toggleHoverRight = () => setHoveredRight(!hoveredRight);

    const [showModal,
        setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [showModal1,
        setShowModal1] = useState(false)
    const openModal1 = () => {
        setShowModal1(prev => !prev)
    }

    const contentWc = <HalfpipeSchedule/>;
    const contentCovid = <div className="bg-gray-100 p-10 h-half overflow-y-scroll">
        <div className="flex flex-col items-center">
            <h1 className="mb-12">COVID-19</h1>
            <p>Canada's Covid-19 Management Plan for the Snow Rodeo Fresski Halfpipe FIS
                World Cups with specific information to applying to the host city of Calgary
                Alberta will be released closer to the event date.
            </p>
            <p>Please check back here later.</p>
        </div>
    </div>;

    return (

        <section id="page-footer" className="bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                    <GatsbyImage
                        objectFit="cover"
                        imgClassName={hoveredLeft
                        ? 'scale-bg'
                        : ''}
                        className="h-96"
                        image={bgImage}
                        alt="Covid Background Image"/>
                    <div className="square-bg"/>
                    <div
                        className="flex h-full items-center justify-center absolute top-0 left-0 right-0 bottom-0 p-10">
                        <button
                            onClick={openModal}
                            onMouseEnter={toggleHoverLeft}
                            onMouseLeave={toggleHoverLeft}
                            className="btn">COVID-19</button>
                    </div>
                </div>
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    modalContent={contentCovid}/>

                <div className="relative">
                    <GatsbyImage
                        objectFit="cover"
                        className="h-96"
                        imgClassName={hoveredRight
                        ? 'scale-bg'
                        : ''}
                        image={bgImage2}
                        alt="WC Background Image"/>
                    <div className="square-bg"/>
                    <div
                        className="flex h-full items-center justify-center absolute top-0 left-0 right-0 bottom-0 p-10">
                        <button
                            onClick={openModal1}
                            onMouseEnter={toggleHoverRight}
                            onMouseLeave={toggleHoverRight}
                            className="btn"><FormattedMessage id="fis_calendar.schedule"/></button>
                    </div>
                </div>
                <Modal
                    showModal={showModal1}
                    setShowModal={setShowModal1}
                    modalContent={contentWc}/>
            </div>
        </section>

    )
}

export default WinsportExtra;