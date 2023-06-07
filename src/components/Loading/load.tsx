'use client'
import styled from 'styled-components';


const LoadContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 15px;

    >div{
        width: 25px;
        height: 25px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: #dd3522;
        border-left-color: #dd8022;
        border-radius: 50%;
        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }

    @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

`

export function Load() {
    return(
        <LoadContainer>
            <div></div>
        </LoadContainer>
    )
}