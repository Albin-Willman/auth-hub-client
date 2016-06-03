import React from 'react';

import Well from 'react-bootstrap/lib/Well';

export default class ServiceCard extends React.Component {
  static defaultProps = {
    service: {},
  };

  render() {
    var { service } = this.props;
    return (

      <Well>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <a href={service.url} target="_blank">Visit</a>
      </Well>
    );
  };
}