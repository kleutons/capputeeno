'use client'
export const dynamic = 'force-dynamic'; 
import { BackButton } from "@/components/Buttons/BackButton";
import { ContainerProduct } from "./productStyled";

import { useState } from "react";
import { Modal } from "@/components/Modal/modal";

export default function Product(){

   
    const [ open, setOpen ] = useState(false);

    const openModal = () => {
        setOpen(!open);
    }


    return(
        <ContainerProduct className="container">

            <Modal isopen={open} setopen={setOpen} />

            <BackButton navigate="/" />
            
        </ContainerProduct>
    )
}