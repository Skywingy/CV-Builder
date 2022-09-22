import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    let url="https://github.com/Skywingy";
    return (
    <FooterS className='style'>
    <div className="footer">
        <a href={url} target="_blank" rel="noreferrer">Copyright © 2022 SkyWingy</a>
    </div>
    </FooterS>
    );
    
}

export default Footer;

const FooterS = styled.div`
background-color: #e4f3ff;
font-size: 1em;
padding: 20px;


`;