import styled from "styled-components";

export const BottomHomeWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 50px;

    @media ${({theme}) => theme.mediaQ.gt1000} {
        padding: 0;
        flex-direction: row;
    }
`;