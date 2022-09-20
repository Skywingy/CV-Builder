import React from 'react';

export class Personal extends React.Component {
    render () {
        return (
            <div>
                <h3>Personal Information</h3>
                <p>First Name: {this.props.firstName}</p>
                <p>Last Name: {this.props.lastName}</p>
                <p>Title: {this.props.title}</p>
                <p>Profile Info: {this.props.prof}</p>
                <img alt="" onError={(event) => event.target.style.display = 'none'} src={this.props.pic}></img>
            </div>
        )
    }
}
