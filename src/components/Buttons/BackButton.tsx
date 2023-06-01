'use client'

import { BackIcon } from "@/icons/back-icon";
import { ContainerBackButton } from "./BackButtonStyled";
import { useRouter } from "next/navigation";

interface BackButtonProps{
    navigate: string;
}

export function BackButton({ navigate }: BackButtonProps) {
    
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return(
        <ContainerBackButton onClick={handleNavigate}>
            <BackIcon />
            Voltar
        </ContainerBackButton>
    )
}