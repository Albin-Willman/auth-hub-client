import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import LoginPage from 'components/LoginPage';

export default class LoginPageGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="LoginPage - without properties">
                    <LoginPage />
                </SGSection>

                <SGSection title="LoginPage - with value property">
                    <LoginPage value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
