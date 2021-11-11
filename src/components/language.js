import React from "react"
import {IntlContextConsumer, changeLocale} from "gatsby-plugin-react-intl"
import SocialNav from "./social-nav"

const languageName = {
    en: "English",
    fr: "Français"
}

const Language = () => {
    return (
        <div id="top" className="flex items-center justify-end px-2">
            <IntlContextConsumer>
                {({languages, language: currentLocale}) => languages.map(language => (
                    <a
                        className="font-bold"
                        key={language}
                        onClick={() => changeLocale(language)}
                        style={{
                        color: currentLocale === language
                            ? `#a51890`
                            : `black`,
                        margin: 10,
                        textDecoration: currentLocale === language
                            ? `underline`
                            : `none`,
                        cursor: `pointer`
                    }}>
                        {languageName[language]}
                    </a>
                ))
}
            </IntlContextConsumer>
            <div className="vl m-1"></div>
            <SocialNav/>
        </div>
    )
}

export default Language