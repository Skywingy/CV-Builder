import React from 'react';
import styled from 'styled-components';

export class Personal extends React.Component {
    render () {
        return (
            
            <div className='here'>
                <h3>Personal Information</h3>
                <Block>
                
                <img className='zurag' alt="" width="90px" height="100px" onError={(event) => event.target.style.display = 'none'} src={this.props.pic}></img>
                
                <p>First Name: {this.props.firstName}</p>
                <p>Last Name: {this.props.lastName}</p>
                <p>Title: {this.props.title}</p>
                <p>Profile Info: {this.props.prof}</p>
                </Block>
            </div>
        ) 
    }
}

const Block = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;