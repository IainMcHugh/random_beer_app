import styled from 'styled-components';

export const Info = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
`;

export const InfoWrapper = styled.section`
    width: 100%;
    min-height: 40vh;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colours.light};
    box-shadow: ${({ theme }) => theme.boxShadow};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.large};
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    @media ${({theme}) => theme.mediaQ.gt1000} {
        width: 55%;
        min-height: 60vh;
        margin: 20px 0;
    }
`;

const handleInfoType = (infotype: string, theme: any, screen?: string) => {
    if(screen === "lg") {
        switch(infotype){
            case "title":
                return (theme.fontSize.xlarge);
            case "description":
                return (theme.fontSize.medium);
            case "subtitle":
                return (theme.fontSize.larger);
            default:
                return (theme.fontSize.small);
        }
    } else {
        switch(infotype){
            case "title":
                return (theme.fontSize.larger);
            case "description":
                return (theme.fontSize.small);
            case "subtitle":
                return (theme.fontSize.large);
            default:
                return (theme.fontSize.small);
        }
    }
}

interface InfoTextProps {
    infotype: string;
}

export const InfoText = styled.p<InfoTextProps>`
    margin: 20px auto;
    color: ${({ theme }) => theme.colours.deep};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: ${({infotype, theme}) => handleInfoType(infotype, theme)};
    
    @media ${({ theme }) => theme.mediaQ.gt768} {
        font-size: ${({infotype, theme}) => handleInfoType(infotype, theme, "lg")};
    }
`;