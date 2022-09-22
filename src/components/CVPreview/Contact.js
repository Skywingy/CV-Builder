import React from 'react';
import styled from 'styled-components';

export function Contact({phone, email, address}) {
    
        return (
            <div>
                <h3>Contact</h3>
                <Block>
                <p>Phone: {phone}</p>
                <p>E-mail: {email}</p>
                <p>Address: {address}</p>
                </Block>
            </div>
        )
    
}

const Block = styled.div`
display: flex;
flex-direction: column;
`;