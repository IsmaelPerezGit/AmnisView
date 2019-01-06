import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '546421998030-kdubcegqcal82e2ls3hedpm693cmv5hk.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {
        return (
            <div>Google Auth</div>
        )
    }
}

export default GoogleAuth