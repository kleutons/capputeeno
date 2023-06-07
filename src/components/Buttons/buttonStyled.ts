'use client'

import styled from "styled-components";

export const ContainerBackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secondary-text);
    border: none;
    background: transparent;
    cursor: pointer;

    margin-top: 28px;
    margin-bottom: 24px;
`

export const ContainerShopButton = styled.button`
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    padding: 8px 2px;
    border-radius: 4px;
    color: #fff;
    border: none;
    background: var(--btn-color-1);
    cursor: pointer;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
`