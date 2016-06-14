import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import ActivateUserForm from 'components/ActivateUserForm';

export default class ActivateUserFormGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="ActivateUserForm - without properties">
                    <ActivateUserForm />
                </SGSection>

                <SGSection title="ActivateUserForm - with value property">
                    <ActivateUserForm value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
