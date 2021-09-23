import React, {useState} from "react"
import styled from "styled-components"
import Logo from "./logo"
import {Link} from 'gatsby-plugin-react-intl';

const Navigation = styled.nav `
  height: 8rem;
  width: 100%;
  display: flex;
  background-color: black;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0 1.5vw;
  z-index: 2;
  transition: all 1s ease-in-out;
  align-items: center;
`

const Toggle = styled.div `
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1.25vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div `
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: -1;

  @media (max-width: 768px) {
    position: absolute;
    margin-top: 127px;
    flex-direction: column;
    height: 15rem;
    width: 100%;
    justify-content: center;
    background: #a41890;
    transition: opacity 0.3s ease-in-out;
    opacity: ${props => (props.open
    ? "0"
    : "100%")};
    right: ${props => (props.open
    ? "-100%"
    : "0")};
      top: 0;
  }
`

const Hamburger = styled.div `
  background-color: white;
  width: 35px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open
    ? "rotate(-45deg)"
    : "inherit")};

  ::before,
  ::after {
    width: 35px;
    height: 3px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    right: 0px;
  }

  ::before {
    transform: ${props => props.open
    ? "rotate(-90deg) translate(-10px, 0px)"
    : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open
        ? "0"
        : "1")};
    transform: ${props => (props.open
        ? "rotate(90deg) "
        : "rotate(0deg)")};
    top: 10px;
  }
`
const NavCalgary = styled(Link)`
  text-decoration: none;
  font-family: "AmsiProNarw-Ultra", sans-serif;
  font-size: 1.5rem;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;
}

:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 0%;
  content: ".";
  color: transparent;
  background: #ffffff;
  height: 4px;
  -webkit-transition: all 0.4s ease-in;
}

&:hover:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100%;
  content: ".";
  color: transparent;
  background: #ffffff;
  height: 4px;
  -webkit-transition: all 0.4s ease-in;
}

@media (max-width: 948px) {
  padding: 20px 0;
  z-index: 6;

  :after {
      display: none;
    }
}
`

const NavRelais = styled(Link)`
  text-decoration: none;
  font-family: "AmsiProNarw-Ultra", sans-serif;
  font-size: 1.5rem;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;
}

:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 0%;
  content: ".";
  color: transparent;
  background: #da7b3b;
  height: 4px;
  -webkit-transition: all 0.4s ease-in;
}

&:hover:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100%;
  content: ".";
  color: transparent;
  background: #da7b3b;
  height: 4px;
  -webkit-transition: all 0.4s ease-in;
}

@media (max-width: 948px) {
  padding: 20px 0;
  z-index: 6;

  :after {
      display: none;
    }
}
`

const NavTremblant = styled(Link)`
  text-decoration: none;
  font-family: "AmsiProNarw-Ultra", sans-serif;
  font-size: 1.5rem;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;
}

:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 0%;
  content: ".";
  color: transparent;
  background: #a41890;
  height: 4px;
  -webkit-transition: all 0.4s ease-in;
}

&:hover:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100%;
  content: ".";
  color: transparent;
  background: #a41890;
  height: 4px;
  -webkit-transition: all 0.4s ease-in;
}

@media (max-width: 948px) {
  padding: 20px 0;
  z-index: 6;

  :after {
      display: none;
    }
}
`

const Navbar = () => {
    const [navbarOpen,
        setNavbarOpen] = useState(false)

        const calgaryLocation = props => {
          const currentLocation = props.pathname
          if (currentLocation.includes("calgary")) {
            return { className: "calgary-active" }
          }
        }

        const relaisLocation = props => {
          const currentLocation = props.pathname
          if (currentLocation.includes("le-relais")) {
            return { className: "relais-active" }
          }
        }

        const tremblantLocation = props => {
          const currentLocation = props.pathname
          if (currentLocation.includes("tremblant")) {
            return { className: "tremblant-active" }
          }
        }
        

    return (
        <Navigation>
            <Logo/>
            <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
                <Hamburger open={navbarOpen}/>
            </Toggle>
            {navbarOpen
                ? (
                    <Navbox onClick={() => setNavbarOpen(!navbarOpen)}>
                        <NavCalgary
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            to="/calgary"
                            title="Calgary">Calgary
                        </NavCalgary>
                        <NavRelais
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            to="/le-relais"
                            title="Le Relais">Le Relais</NavRelais>
                        <NavTremblant
                            to="/tremblant"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            title="Tremblant">Tremblant</NavTremblant>
                    </Navbox>
                )
                : (
                    <Navbox open>
                        <NavCalgary getProps={({ location }) => calgaryLocation(location)} to="/calgary" title="Calgary">Calgary</NavCalgary>
                        <NavRelais getProps={({ location }) => relaisLocation(location)} to="/le-relais" title="Le Relais">Le Relais</NavRelais>
                        <NavTremblant getProps={({ location }) => tremblantLocation(location)} to="/tremblant" title="Tremblant">Tremblant</NavTremblant>
                    </Navbox>
                )}
        </Navigation>
    )
}

export default Navbar