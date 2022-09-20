import React from 'react';

export class Contact extends React.Component {
    render () {
        return (
            <div>
                <h3>Contact</h3>
                <p>Phone: {this.props.phone}</p>
                <p>E-mail: {this.props.email}</p>
                <p>Address: {this.props.address}</p>
            </div>
        )
    }
}
