import styled from 'styled-components'

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    padding: 25px;
    border-radius: 8px;
    width: 550px;
    min-width: 250px;
    height: auto;
    position: relative;
    margin: 20px;

    >button{
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        font-size: 16px;
        cursor: pointer;
        padding: 8px;
        border-radius: 5px;
        font-size: 17px;
        width: 40px;
        
        &:hover{
            background-color: #dddddd;
        }
    }
    
    footer{
        display: flex;
        justify-content: end;
        gap: 20px;
        margin-top: 25px;

        button{
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            background: var(--btn-color-1);
            color: #fff;

            &:hover{
                background: #c6451c;
            }
        }

    }
    
`