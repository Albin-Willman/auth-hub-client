/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import CreateUserForm from 'components/CreateUserForm';

describe('CreateUserForm Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<CreateUserForm />);
    });
});
