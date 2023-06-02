'use client'

import styled from "styled-components";

export const ContainerCart = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        flex-direction: row;
    }
`

export const ContainerCartResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    min-width: 352px;
    padding: 24px;
    margin-top: 40px;
    background: #fff;

    @media (min-width: ${props => props.theme.tabletBreakpoint}) {
        min-height: 650px;
    }
    
    >div{
        width: 100%;

        h3{
            font-weight: 600;
            font-size: 20px;
            color: var(--text-dark-2);
            text-transform: uppercase;
            margin-bottom: 30px;
        }
    }

    ul{ 
        display: flex;
        flex-direction: column;
        gap: 12px;

        li{
            text-transform: uppercase;
            list-style: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            text-decoration-line: underline;
            color: var(--text-dark);
                cursor: pointer;
        }
    }
    
`

export const ResumeTotalItem = styled.div<{isBold?:boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-size: 16px;
    font-weight: ${props => props.isBold ? '600' : '400'};
    margin-bottom: 12px;
`

export const ResumeDivider = styled.div`
    width: 90%;
    height: 1px;
    margin: 8px auto;
    padding: 0;
    background: var(--shapes);
`

export const ContainerCartList = styled.div`
    min-width: 352px;

    h3{
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark-2);
    }

    p{
        font-weight: 300;
        line-height: 150%;
        font-size: 16px;
        color: var(--text-dark-2);

        span{
            font-weight: 600;
            margin-left: 8px;
        }
    }

`

export const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`

export const ContaineCartItem = styled.li`
    display: flex;
    align-items: center;
    height: 110px;
    width: 100%;
    border-radius:  8px;
    background-color: #fff;


    button{
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    img{
        max-height: 100%;
        width: 150px;
        border-radius: 8px 0 0 8px;
        cursor: pointer;
    }

    >div{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;

        padding: 16px 24px;
        line-height: 150%;
        color: var(--text-dark-2);
        width: 100%;
        height: 100%;

        h4{
            font-weight: 300;
            font-size: 20px;
            cursor: pointer;
        }
        p{
            font-weight: 400;
            font-size: 12px;
            max-height: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            span{
                font-weight: 600;
                font-size: 16px;
                color: var(--shapes-dark);
            }
        }
    }


    @media (min-width: ${props => props.theme.tabletBreakpoint}) {
        height: 210px;
        
        img{
            width: 256px;
        }
    }
`

export const SelectQuant = styled.select`
    padding: 8px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--bg-secondary);
    color: var(--text-dark);
    font-weight: 400;
    font-size: 16px;

`

