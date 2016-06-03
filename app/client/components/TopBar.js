// 
import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


export default class TopBar extends React.Component {

  static propTypes = {
    goTo: React.PropTypes.func,
  }

  static defaultProps = {
    goTo: '',
    logout: '',
    loggedIn: false,
    router: {},

  }

  buildNav() {
    var { loggedIn, goTo, logout, router } = this.props;

    var logoutLink, createAccountLink;
    if(loggedIn){
      logoutLink = (<Nav pullRight><NavItem href="#" onClick={ logout }>Log out</NavItem></Nav>);
    } else {
      createAccountLink = <NavItem href="#" onClick={$ => { goTo(router.createAccount) }}>Create account</NavItem>;
    }
    return (
      <Navbar.Collapse>
        <Nav>
          {createAccountLink}
          <NavItem href="#" onClick={$ => { goTo(router.allServices) }}>All services</NavItem>
        </Nav>
        {logoutLink}
        
      </Navbar.Collapse>);
  }

  render() {
    var { goTo, router, loggedIn } = this.props;
    var nav = this.buildNav();
    var homePath = router.login;
    if(loggedIn){
      homePath = router.myServices
    }

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" onClick={$ => { goTo(homePath) }}>Services</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {nav}
      </Navbar>
      );
  }
}
