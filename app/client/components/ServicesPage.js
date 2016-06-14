import React from 'react';

import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ServicesTable from 'components/ServicesTable';

export default class ServicesPage extends React.Component {
  static defaultProps = {
    user: {},
    services: [],
    logout: $=>{},
    logoutAll: $=>{},
    referesh: $=>{}
  };

  buildTable() {

    var { services, logout, referesh } = this.props;
    return (
      <ServicesTable
            services={services}
            logout={logout}
            referesh={referesh}
            />);
  }

  render() {


    var { user, logout, services, logoutAll } = this.props;
    var table = this.buildTable();

    return (
      <div>
        <h3>You are logged in as {user.username}</h3>
        <div className={'services-area'}>
          {table}
        </div>
        <Row>
          <Col sm={6}>
            <Button block onClick={ $ => logout('Services') }>
              {"Log out"}
            </Button>
          </Col>
          <Col sm={6}>
            <Button block bsStyle={'danger'} onClick={ logoutAll }>
              {"Logout all services"}
            </Button>
          </Col>
        </Row>
      </div>
    );
  };
}
