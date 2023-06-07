'use client'
import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    gap: 8px;
    margin-top: 16px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        font-weight: 400;
        font-size: 16px;
        color: var(--text-dark);
        text-transform: uppercase;
        user-select: none;
    }
`

export const BtnPages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #E9E9F0;
    border: 1px solid transparent;
    cursor: pointer;

    &.active{
        background-color: var(--shapes-ligth);
        border: 1px solid #FFA585;
        color: #FFA585;
        font-weight: 600;
        cursor: default;
    }
`


export const ListCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 32px;
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(10px);
    border-radius: 4px;
    cursor: pointer;

    width: 256px;

    img{
        width: 256px;
        height: 300px;
        border-radius: 4px 4px 0 0;
    }

    h3{
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p{
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: var(--shapes-dark);
    }
    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px;

        > div{
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0px;
            background: var(--shapes);
        }
    }
    
`;