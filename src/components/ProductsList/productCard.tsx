'use client'

import { formatPrice } from "@/utils/formatPrice";
import { Card } from "./productsStyled";
import { useRouter } from "next/navigation";
import Image from 'next/image';

interface ProductCardProps{
    image: string,
    title: string,
    price: number,
    id: string
}



export function ProductCard(props: ProductCardProps){
    
    const router = useRouter();

    const price = formatPrice(props.price);

    const handleNavigate = () => {
        router.push('/product?id='+props.id);
    }

    return(
        <Card onClick={handleNavigate}>
            <Image alt={props.title} src={props.image} width={256} height={300} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )

}