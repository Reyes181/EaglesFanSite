import styled from 'styled-components';

export const FeaturedWrapper = styled.div`
    margin: 0 auto;
    width: 90em;
    min-height: 50em;
    overflow: hidden;
    @media (max-width: 1024px) {
        display: none
    }
`;

export const FeaturedNumber = styled.div`
    font-size: 200px;
    color: #ffffff;
    transform: translate(260px,170px);
    position: absolute;
`;

export const MobileWrapper = styled.div`
    display: none;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: rgb(0,76,84);
    background: radial-gradient(circle, rgba(0,76,84,1) 0%, rgba(0,0,0,1) 78%);
    
    @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 10em;
        position: relative;
    }
`;