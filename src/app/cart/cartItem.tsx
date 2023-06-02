'use client'
import { ProductInCart } from "@/types/productsResponse"
import { ContaineCartItem, SelectQuant } from "./cartStyled"
import { formatPrice } from "@/utils/formatPrice"
import { ChangeEvent } from "react"
import { DeleteIcon } from "@/icons/delete-icon"
import { useRouter } from "next/navigation"

interface CartItemProps{
    product: ProductInCart,
    handleUpdateQuant(id:string, quantity: number):void
    handleDelete(id:string): void
}

export function CartItem({product, handleUpdateQuant, handleDelete}:CartItemProps){

    const router = useRouter();

    const viewProduct = () => router.push('/product?id='+product.id) ;

    const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuant(product.id, Number(e.target.value))
    }

    return(
        <ContaineCartItem>
            <img src={product.image_url}  onClick={viewProduct} />
            <div>
                <div>
                    <h4 onClick={viewProduct}>{product.name}</h4>
                    <button onClick={() => handleDelete(product.id)}> 
                        <DeleteIcon />
                    </button>
                </div>
                <p> {product.description}</p>

                <div>
                    <SelectQuant value={product.quantity} onChange={handleChange}>
                        <option value={1}> 1 </option>
                        <option value={2}> 2 </option>
                        <option value={3}> 3 </option>
                        <option value={4}> 4 </option>
                        <option value={5}> 5 </option>
                    </SelectQuant>
                    
                    <span>{formatPrice(product.price_in_cents)}</span>
                </div>
            </div>
        </ContaineCartItem>
    )
}