export interface Product{
    name: string,
    price_in_cents: number,
    id: string,
    image_url: string,
    description?: string
}
export interface ProductCartAdd extends Product{
    quantity?: number,
}

export interface ProductInCart extends Product{
    quantity: number,
}

export interface ProductsFetchResponse{
    data: {
        allProducts: Product[]
    }
}

export interface ProductFetchResponse{
    data: {
        Product: Product
    }
}