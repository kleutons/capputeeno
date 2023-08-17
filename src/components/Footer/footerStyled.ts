'use client'

import styled from "styled-components";

export const TagFooter = styled.footer`
    background: var(--bg-primary);
    margin-top: 40px;
    border-top: 1px solid var(--shapes);
    width: 100%;
    min-height: 80px;
    text-align: center;
    font-size: 15px;
    color: var(--text-dark);
    padding: 15px 0;

    a{
        color: #1801ad;
        font-weight: bold;
    }
    a:hover{
        text-decoration: underline;
        color: #0647c8;
    }
`