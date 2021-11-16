import React from "react"
import {Link} from "react-scroll"
import {FormattedMessage} from "gatsby-plugin-react-intl"

const PageNav = () => {

    return (
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative hidden sm:flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center">
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link
                                to="event-info"
                                className="hover:bg-gray-900 text-white px-3 py-2 rounded-md cursor-pointer"
                                activeClass='bg-gray-900'
                                spy={true}
                                smooth
                                duration={500}
                                offset={-72}><FormattedMessage id="navigation.info"/></Link>

                            <Link
                                to="schedule"
                                className="hover:bg-gray-900 text-white px-3 py-2 rounded-md cursor-pointer"
                                activeClass='bg-gray-900'
                                spy={true}
                                smooth
                                duration={500}
                                offset={-72}><FormattedMessage id="navigation.schedule"/></Link>

                            <Link
                                to="athletes"
                                className="hover:bg-gray-900 text-white px-3 py-2 rounded-md cursor-pointer"
                                activeClass='bg-gray-900'
                                spy={true}
                                smooth
                                duration={500}
                                offset={-72}><FormattedMessage id="navigation.athletes"/></Link>
                            <Link
                                to="contact"
                                className="hover:bg-gray-900 text-white px-3 py-2 rounded-md cursor-pointer"
                                activeClass='bg-gray-900'
                                spy={true}
                                smooth
                                duration={500}
                                offset={-72}><FormattedMessage id="navigation.contact"/></Link>
                            <Link
                                to="partners"
                                className="hover:bg-gray-900 text-white px-3 py-2 rounded-md cursor-pointer"
                                activeClass='bg-gray-900'
                                spy={true}
                                smooth
                                duration={500}
                                offset={-72}><FormattedMessage id="navigation.partners"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNav