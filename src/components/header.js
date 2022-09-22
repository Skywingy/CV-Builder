import React from 'react'
import styled from 'styled-components';
const Header = () => {
    return (
        <HeaderS className='style'>
        <div className='Header'>
            CV BUILDER
        </div>
        </HeaderS>
)

}

export default Header;

const HeaderS = styled.div`
background-color: #e4f3ff;
font-size: 2em;
padding: 20px;
`;