import React from "react";
import "./header.scss";
import Nav from "../../components/nav/nav.cmp";
import BurgetButoon from "../burger/burger.cmp";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: false,
    };
  }

  buttonToggle = () => {
    this.setState((prevstate) => {
      return { nav: !prevstate.nav };
    });
  };

  render() {
    return (
      <>
        <div className="header">
          <Link className="logo" to="/Talesbylal/">
            <div className="logo-title">
              talesbylal
              <br />
            </div>
          </Link>
          <BurgetButoon toggle={this.buttonToggle} nav={this.state.nav} />
          <Nav toggle={this.buttonToggle} nav={this.state.nav} />
        </div>
      </>
    );
  }
}
export default Header;
