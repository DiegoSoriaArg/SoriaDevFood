import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
    width: 100%;
    background-color: white;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <strong>Desarrollado por <a href="https://soriadev.netlify.app" target="_blank" rel="noopener noreferrer">Soria-Dev</a></strong>
        </FooterStyle>
    );
}

export default Footer;