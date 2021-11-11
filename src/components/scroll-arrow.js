import React, {useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import {IconContext} from "react-icons";

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

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <IconContext.Provider
            value={{
            color: "white",
            className: "w-20 h-20 inline-block",
            style: {
                verticalAlign: 'middle'
            }
        }}>
            <IoIosArrowUp
                className="scrollTop"
                onClick={scrollTop}
                style={{
                height: 40,
                display: showScroll
                    ? 'flex'
                    : 'none'
            }}/>
        </IconContext.Provider>
    );
}

export default ScrollArrow;