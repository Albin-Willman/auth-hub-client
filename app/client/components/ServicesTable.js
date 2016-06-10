import React from 'react';

import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';

export default class ServicesTable extends React.Component {

  static defaultProps = {
    services: [],
    logout: $=>{},
    referesh: $=>{}
  };

  render() {
    var { services, logout, referesh } = this.props;
    var serviceRows = services.map(buildServiceRowFactory(logout));
    return (
      <Table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Logged in since</th>
            <th>
              <Button bsStyle={'primary'} onClick={ referesh }>
                {"Referesh"}
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {serviceRows}
        </tbody>
      </Table>);
  }
}

function buildServiceRowFactory(logout){
  return function (data) {
    console.log('data', data);
    return (<tr key={data.id}>
        <td>{data.label}</td>
        <td>{data.createdAt}</td>
        <td>
          <Button bsStyle={'primary'} onClick={ $ => logout(data.label) }>
            {"Logout service"}
          </Button>
        </td>
      </tr>);
  }
}
