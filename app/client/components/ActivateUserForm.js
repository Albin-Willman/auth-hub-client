
import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class CreateUserForm extends React.Component {
  defaultProps = {
    user: {},
    onPasswordChange: $=>{},
    submit: $=>{},
    title: '',
    loadUser: () => {}
  };

  componentWillMount() {
    var { user, loadUser } = this.props;
    if( !user.username || user.username.length === ''){
        loadUser();
    }
  }

  render() {
    var { onPasswordChange, submit, title, user } = this.props;
    return (
      <Row>
        <Col md={4} mdOffset={4}>
          <Well>
            <h2>{user.username}</h2>
            <FormGroup>
              <FormControl
                type="password"
                placeholder={'Password'}
                onChange={e => onPasswordChange(e.target.value)}
                value={user.password}
              />
            </FormGroup>
            <Button block bsStyle={'primary'} onClick={submit}>
              {title}
            </Button>
          </Well>
        </Col>
      </Row>
    );
  };
}
