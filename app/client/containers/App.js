import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PageHeader from 'react-bootstrap/lib/PageHeader';


import ServicesPage from 'components/ServicesPage';
import LoadingScreen from 'components/LoadingScreen';
import AllServicesPage from 'containers/AllServicesPage';
import Link from 'components/Link';
import TopBar from 'components/TopBar';

import { router } from 'lib/router';

import LoginPage from 'auth-hub-module/lib/components/LoginPage';
import { setUsername, setPassword } from 'auth-hub-module/lib/actions/user-actions';
import { goToRoute } from 'auth-hub-module/lib/services/route-services';

import { login, createUser } from 'services/user-services';
import { 
  logOut,
  reloadServices,
  logOutAll } from 'services/services-services';

function initialAppState(state) {
  return {
    user: state.user,
    services: state.services,
    routes: state.routes
  };
}

@connect(initialAppState)
export default class App extends React.Component {
  verifyLoggedIn() {
    var { user } = this.props;
    if(user.token) {
      return true;
    }
    return false;
  }

  componentWillMount() {
    var { dispatch, routes } = this.props;
    var urlPath = location.hash.slice(1);
    var resultingPath = urlPath;
    var authorized = this.allowWithoutAuthorization(urlPath);
    if(!authorized){
      authorized = this.verifyLoggedIn()
    }
    if(!authorized) {
      resultingPath = router.login;
    }
    if((routes.currentPage) != urlPath){
      dispatch(goToRoute(resultingPath));
    }
  }

  allowWithoutAuthorization(path) {
    switch (path) {
      case router.allServices: return true;
      case router.login:       return true;
      default:                 return false;
    }
  }

  buildLoginPage() {
    var { dispatch, user } = this.props;
    return (<LoginPage
          onUsernameChange={ username => { dispatch(setUsername(username))} }
          onPasswordChange={ password => { dispatch(setPassword(password))} }
          submit={ $=> { dispatch(login())} }
          title={'Login'}
          user={user}
        />)
  }

  buildCreateAccountPage() {
    var { dispatch, user } = this.props;
    return (<LoginPage
          onUsernameChange={ username => { dispatch(setUsername(username))} }
          onPasswordChange={ password => { dispatch(setPassword(password))} }
          submit={ $=> { dispatch(createUser())} }
          title={'Create account'}
          user={user}
        />)
  }

  buildServicesPage() {
    if(this.verifyLoggedIn()){
      var { dispatch, user, services } = this.props;
      return (<ServicesPage
            user={ user }
            services={ services.services }
            logoutAll= { $=> dispatch(logOutAll()) }
            logout={ service => { dispatch(logOut(service)) } }
            referesh={ $=> { dispatch(reloadServices())} }
          />);
    }
  }

  buildContent() {
    var { services, routes } = this.props;
    if(services.loading){
      return (<LoadingScreen/>);
    }
    let Page;
    switch (routes.currentPage) {
      case router.login:         Page = this.buildLoginPage(); break;
      case router.myServices:    Page = this.buildServicesPage(); break;
      case router.allServices:   Page = <AllServicesPage/>; break;
      case router.createAccount: Page = this.buildCreateAccountPage(); break;
      default:                   Page = this.buildLoginPage(); break;
    }
    return Page;
  }

  buildTopNav() {
    var { dispatch } = this.props;
    return <TopBar
      goTo={(route) => { dispatch(goToRoute(route)) }}
      loggedIn={this.verifyLoggedIn()}
      logout={$ => { dispatch(logOut('Services')) }}
      router={router}
      />
  }

  render() {
    var topNav  = this.buildTopNav();
    var content = this.buildContent();
    return (
      <div>
        {topNav}
        <Grid>
          <h1>{"Services"}</h1>
          {content}
        </Grid>
      </div>
    );
  }
}
