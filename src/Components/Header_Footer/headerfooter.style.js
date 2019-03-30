import styled from 'styled-components';

export const HeaderLinks = styled.div`
     display: flex;
     justify-content: space-between;
     width: 100%;
`;

export const Nav = styled.nav`
    line-height: 4;
`;

export const EaglesFooter = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    color: #ffffff;
    padding: 15px 0;
    background: #000000;
    font-family: 'NFLEagles';
    color: #004C54;
    
    p {
        text-transform: uppercase;
        font-size: 20px;
        opacity: 0.6;
        align-self: center;
    }
    
    div {
        display: flex;
        flex-direction: column;
    }
    
    ul {
        display: flex;
        list-style: none;
        margin-right: 3em;
        margin-top: -1em;
        li {
            margin-left: 14px;
            margin-top: 0;
        }
    }
    
    @media (max-width: 880px) {
        {
            flex-direction: column;
        }
        
        a {
            div {
                margin: 0 10px
            }
        }
        
        p {
            text-align: center;
            margin-bottom: 10px;
            font-size: 12px
        }
        
        ul {
            li {
                margin: 0 auto;
                margin-top: 5px
            }
        }
    }
`;
