import React from 'react';
import { connect } from 'react-redux';

import { goToRoute } from 'services/route-services';

import { ConnectedServices } from 'lib/connected-services';
import ServiceCard from 'components/ServiceCard';

function initialAppState(state) {
  return {
    routes: state.routes
  };
}

@connect(initialAppState)
export default class AllServicesPage extends React.Component {
  render() {
    var serviceCards = ConnectedServices.map(buildServiceCard);
    return (<div>
        {serviceCards}
      </div>)
  }
}

function buildServiceCard(service){
  return <ServiceCard key={service.name} service={service}/>
}
