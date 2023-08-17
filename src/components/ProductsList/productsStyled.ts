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
    gap: 15px;
    margin-top: 32px;

    @media (min-width: ${props => props.theme.tabletBreakpoint} ){
        gap: 32px;
    }
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    cursor: pointer;
    width: 175px;

    

    @media (min-width: ${props => props.theme.mobileBreakpoint} ){
        width: 206px;
    }

    @media (min-width: ${props => props.theme.tabletBreakpoint} ){
        width: 256px;
    }

    div.img{
        width: 100%;
        height: 300px;
        border-radius: 8px 8px 0 0;
        overflow: hidden;

        >img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        -o-object-fit: cover;
        -o-object-position: center;
        transition: transform 0.5s;
        }
 
    }

    :hover{
        div.img>img{
            transform:  scale(1.1);
        }
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
    div.content{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 12px;
        width: 100%;

        > div{
            width: 100%;
            height: 1px;
            margin: 8px 0;
            padding: 0px;
            background: var(--shapes);
        }
    }
    
`;