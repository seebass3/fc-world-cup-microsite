import React from "react"
import {Link} from "react-scroll"
import {FormattedMessage} from "gatsby-plugin-react-intl"

const MobileNav = () => {

    return (
        <nav id="page-nav">
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 py-4 space-y-1">
                    <Link
                        to="event-info"
                        className="bg-gray-900 bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                        activeClass='bg-gray-900'
                        spy={true}
                        smooth
                        duration={500}><FormattedMessage id="navigation.info"/></Link>

                    <Link
                        to="schedule"
                        className="bg-gray-900 bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                        activeClass='bg-gray-900'
                        spy={true}
                        smooth
                        duration={500}><FormattedMessage id="navigation.schedule"/></Link>

                    <Link
                        to="athletes"
                        className="bg-gray-900 bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                        activeClass='bg-gray-900'
                        spy={true}
                        smooth
                        duration={500}><FormattedMessage id="navigation.athletes"/></Link>

                    <Link
                        to="contact"
                        className="bg-gray-900 bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                        activeClass='bg-gray-900'
                        spy={true}
                        smooth
                        duration={500}><FormattedMessage id="navigation.contact"/></Link>

                    <Link
                        to="partners"
                        className="bg-gray-900 bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                        activeClass='bg-gray-900'
                        spy={true}
                        smooth
                        duration={500}><FormattedMessage id="navigation.partners"/></Link>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav