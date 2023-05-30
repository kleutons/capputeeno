"use client"

import styled from "styled-components";


export const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    padding-top: 34px;
`;

export const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style:none;
`;

interface FilterItemProps{
    active?: boolean
}

export const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.active ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.active ? 'var(--text-dark2)' : 'var(--text-dark)'};
    cursor: pointer;

    border-bottom: ${props => props.active ? '4px solid var(--orange-low)' : ''};
`;

export const PriorityFilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        border: none;
        cursor: pointer;
        background: transparent;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        white-space:nowrap;
        
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 16px;
        }
    }
`;

export const PriorityFilter = styled.ul`
    position: absolute;
    white-space: nowrap;
    width: 176px;
    background-color: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    
    list-style: none;
    top: 110%;
    left: -47%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
        border-bottom: 1px solid transparent;
    }

    li + li {
        margin-top: 4px;
    }

    li:hover{
        border-bottom: 1px solid var(--text-light);
    }

`