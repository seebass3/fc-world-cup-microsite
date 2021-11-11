import React, {useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import {IconContext} from "react-icons";
import {Link} from 'react-scroll';

const ScrollArrow = () => {

    const [showScroll,
        setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 1500) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 1500) {
            setShowScroll(false)
        }
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', checkScrollTop)
    }

    return (
        <IconContext.Provider
            value={{
            color: "white",
            className: "w-20 h-20 inline-block",
            style: {
                verticalAlign: 'middle'
            }
        }}>
            <Link to="top" title="Scroll to Top" smooth duration={500}>
            <IoIosArrowUp
                className="scrollTop"
                style={{
                height: 40,
                display: showScroll
                    ? 'flex'
                    : 'none'
            }}/>
            </Link>
        </IconContext.Provider>
    );
}

export default ScrollArrow;