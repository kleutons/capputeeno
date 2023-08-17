'use client'

import styled from "styled-components";

export const ContainerProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    section{
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 32px;

        img{
            max-width: 640px;
            width: 50%;
        }

        > div {
            display: flex;
            
            justify-content: space-between;
            flex-direction: column;

            button {
                text-transform: uppercase;
                background-color: #115D8C;
                mix-blend-mode: multiply;
                border-radius: 4px;
                border: none;
                color: white;
                padding: 10px 0;
                
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
        }
    }
    
   
`

export const ProductInfor = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    

        span{
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: var(--text-dark2);
        }

        h2 {
            font-weight: 300;
            font-size: 32px;
            line-height: 150%;
            color: var(--text-dark2);
            margin-top: 12px;
        }

        span:nth-of-type(2){
            font-weight: 600;
            font-size: 20px;
            color: var(--shapes-dark);
            margin-bottom: 24px;
        }

        p{
            font-weight: 400;
            font-size: 12px;
            color: var(--text-dark);
        }


        div{
            h3{
                margin-top: 28px;
                margin-bottom: 8px;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 16px;
                color: var(--text-dark);
            }

            p{
                font-size: 14px;
            }
        }
    
`