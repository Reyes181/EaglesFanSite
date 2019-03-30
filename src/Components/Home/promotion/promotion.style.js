import styled from 'styled-components';

export const AD = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 150px;
    margin: 0 auto
    
    @media (max-width: 800px) {
        background-size: contain !important;
        height: 6.5em !important;
    }
    @media (max-width: 600px) {
        height: 4em !important;
    }
    @media (max-width: 390px) {
        height: 3.3em !important;
    }
`;