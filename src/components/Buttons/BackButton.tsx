'use client'

import { BackIcon } from "@/icons/back-icon";
import { ContainerBackButton } from "./buttonStyled";

interface BackButtonProps{
    navigate: string;
}

export function BackButton({ navigate }: BackButtonProps) {
    
    const handleClick = () => {
        window.history.back();
    }

    return(
        <ContainerBackButton onClick={handleClick}>
            <BackIcon />
            Voltar
        </ContainerBackButton>
    )
}