import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export default class LoginPage extends React.Component {
  static defaultProps = {
    user: {},
    onUsernameChange: $=>{},
    onPasswordChange: $=>{},
    submit: $=>{},
    title: ''
  };

  render() {
    var { onUsernameChange, onPasswordChange, submit, title, user } = this.props;
    return (
      <div>
        <Input
          type="text"
          placeholder={'Username'}
          onChange={e => onUsernameChange(e.target.value)}
          value={user.username}
        />
        <Input
          type="password"
          placeholder={'Password'}
          onChange={e => onPasswordChange(e.target.value)}
          value={user.password}
        />
        <Button block bsStyle={'primary'} onClick={submit}>
          {title}
        </Button>
      </div>
    );
  };
}
