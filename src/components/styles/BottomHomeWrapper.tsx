import styled from "styled-components";

export const BottomHomeWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media ${({theme}) => theme.mediaQ.gt1000} {
        flex-direction: row;
    }
`;