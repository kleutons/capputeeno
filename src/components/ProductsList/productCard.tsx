import { formatPrice } from "@/utils/formatPrice";
import { Card } from "./productsStyled";

interface ProductCardProps{
    image: string,
    title: string,
    price: number,
}



export function ProductCard(props: ProductCardProps){
    
   

    const price = formatPrice(props.price);

    return(
        <Card>
            <img src={props.image} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )

}