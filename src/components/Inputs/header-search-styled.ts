"use client"

import styled from "styled-components";


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 325px;
    border-radius: 8px;
    background-color: var( --bg-secondary);
    justify-content: space-between;
    
    >svg{
        cursor: pointer;
        min-height: 24px;
        min-width: 24px;
        margin-right: 10px;
    }
`

export const SearchInput = styled.input`
    width:100%;
    border: none;
    padding: 10px 16px;
    background-color: transparent;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    &:focus-visible{
        outline: none;
    }
`;