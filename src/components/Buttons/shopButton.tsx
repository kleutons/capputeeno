'use client'

import { ContainerShopButton } from "./buttonStyled";
import { useRouter } from "next/navigation";

interface ShopButtonProps{
    navigate: string;
}

export function ShopButton({ navigate }: ShopButtonProps) {
    
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return(
        <ContainerShopButton onClick={handleNavigate}>
            Finalizar a compra
        </ContainerShopButton>
    )
}