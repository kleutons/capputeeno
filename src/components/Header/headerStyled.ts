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
        gap: 20px
    }
`;

export const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;