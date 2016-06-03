import React from 'react';

export default class Link extends React.Component {

  static defaultProps = {
    goTo: $=>{},
    label: ''
  };

  render() {
    var { goTo, label } = this.props;
    return (
      <span className={'link'} onClick={goTo}>{label}</span>
    );
  };
}
