import styled from 'styled-components';

export const CenterWrapper = styled.div`
    display: none;
    background: #ffffff
    @media (max-width: 880px) {
        width: 100%;
        display: block;
    }
`;

export const MeetWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    @media (max-width: 880px) {
        flex-direction: row;
        padding: 40px 0px;
    }
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center
    }
`;

export const EaglesPlayer = styled.div`
    padding: 0 2em;
`;

export const PlayerCardWrapper = styled.div`
    background: #004C54;
    border: 1px solid #ececec;
    width: 220px;
    padding: 10px 10px 10px 10px;
    font-family: 'NFLEagles'
`;

export const PlayerCardThumb = styled.div`
    border: 1px solid #eeeeee;
    width:100%;
    height:9em;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: 270px !important;
`;

export const PlayerCardInfo = styled.div`
    position: relative;
`;

export const PlayerCardNumber = styled.div`
    color: #ffffff;
    opacity: 0.5;
    font-size: 5em;
    text-align: right;
    line-height: 1.1em;
    font-family: 'NFLEagles'
`;

export const PlayerCardName = styled.div`
    position: absolute;
    bottom: 0px;
    
    span {
        display: block;
        font-size: 2em;
        color: #ffffff;
    }
`;

export const TextWrapper = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center
`;

export const TextHeader = styled.div`
    background: #004C54; 
    font-size: 4em; 
    line-height: 1.1em;
    font-family: 'NFLEagles';
    color: #ffffff;
    display: inline-block;
    margin-bottom: 10px
`;