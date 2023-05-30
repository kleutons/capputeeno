"use client"

import styled from "styled-components";

export const CartCount = styled.span`
    border-radius: 50%;
    padding: 0 5px;
    font-size: 10px;
    background-color: var(--delete-color);
    color: white;
    margin-left: -10px;
    margin-bottom: -20px;
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    padding-left: 9px;
    cursor: pointer;

    >svg{
        min-height: 24px;
        min-width: 24px;
    }

    &:hover{
        background-color: var(--text-light);
    }
`
