import React, {useEffect, useState, useRef} from 'react';
import {Link} from 'react-scroll';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import PropTypes from 'prop-types';

const PageNav = ({color}) => {

    const [isSticky,
        setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().bottom <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    return (
        <nav id="page-nav">
            <div
                className={`sticky-wrapper hidden sm:block${isSticky
                ? ' sticky-nav'
                : ' '}`}
                ref={ref}>
                <div className={`${color} sticky-inner shadow-lg`}>
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
                </div>
            </div>
        </nav>
    )
};

PageNav.propTypes = {
    color: PropTypes.string.isRequired
  };

export default PageNav;