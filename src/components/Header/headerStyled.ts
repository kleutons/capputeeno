"use client"

import styled from "styled-components";

export const TagHeader = styled.header`    
    width: 100%;
    background-color: #fff;

    >div.container{
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container-input{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px
    }

    @media (min-width: ${props => props.theme.tabletBreakpoint} ){
        .container-input{
            gap: 20px
        }
    }
`;

export const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 35px;
    line-height: 150%;
    min-width: 150px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    >svg{
        height: 22px;
        width: 22px;
    }

    @media (min-width: ${props => props.theme.tabletBreakpoint} ){
        font-size: 40px;
        >svg{
            height: 24px;
            width: 24px;
        }
    }
`;