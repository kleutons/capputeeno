import { useCartLocal } from "@/hooks/userCartLocal";
import { BackgroundModal, ContainerModal } from "./modalStyled";
import { useRouter } from "next/navigation";

interface IModal {
    isopen?: boolean,
    setopen: (isopen: boolean) => void;
}

export function Modal(props:IModal){
    const router = useRouter();
    
    const { cartItems } = useCartLocal();
    
    const closeModal = () => {
        props.setopen(false);
    }

    return(
        <>
            {props.isopen && (

                 <BackgroundModal>
                    <ContainerModal>
                        <button onClick={closeModal}>X</button>
                        ✅ Um novo item foi adicionado ao seu carrinho de compras.
                        
                        <p> Você tem <strong>{cartItems.length}</strong> itens no seu carrinho de compras.
                        </p>
                        <footer>
                            <button onClick={() => router.push('/cart')} >Ver Carrinho de Compras</button>
                        </footer>
                    </ContainerModal>
                </BackgroundModal>

            )}
        </>
       
    )
}