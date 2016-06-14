import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import CreateUserForm from 'components/CreateUserForm';

export default class CreateUserFormGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="CreateUserForm - without properties">
                    <CreateUserForm />
                </SGSection>

                <SGSection title="CreateUserForm - with value property">
                    <CreateUserForm value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
