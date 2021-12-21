import React from 'react';
import {Link} from 'react-scroll';
import {FormattedMessage} from 'gatsby-plugin-react-intl';
import PropTypes from 'prop-types';

const MobileNav = ({color}) => {

    return (
        <div className={`${color} sm:hidden`} id="mobile-menu">
            <div className="px-2 py-4 space-y-1">
                <Link
                    to="event-info"
                    className="bg-white bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                    smooth
                    duration={500}><FormattedMessage id="navigation.info"/></Link>

                <Link
                    to="schedule"
                    className="bg-white bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                    smooth
                    duration={500}><FormattedMessage id="navigation.schedule"/></Link>
                <Link
                    to="watch"
                    className="bg-white bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                    smooth
                    duration={500}><FormattedMessage id="navigation.watch"/></Link>
                <Link
                    to="athletes"
                    className="bg-white bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                    smooth
                    duration={500}><FormattedMessage id="navigation.athletes"/></Link>

                <Link
                    to="contact"
                    className="bg-white bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                    smooth
                    duration={500}><FormattedMessage id="navigation.contact"/></Link>

                <Link
                    to="partners"
                    className="bg-white bg-opacity-30 text-center text-white block px-3 py-2 rounded-md cursor-pointer"
                    spy={true}
                    smooth
                    duration={500}><FormattedMessage id="navigation.partners"/></Link>
            </div>
        </div>
    )
}

MobileNav.propTypes = {
    color: PropTypes.string.isRequired
};

export default MobileNav