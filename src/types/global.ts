export type SideValue = 'latest' | 'low' | 'hight'

export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    variant: string[]
}

export type ProductAction = {
    status: number,
    body: string,
    data: Product[]
}

export type ProductDetailAction = {
    status: number,
    body: string,
    data: Product
}

export type CartItem = {
    product: Product,
    quantity: number,
    selectedVariant: string,
}

export type NoteAccountType = 'login' | 'register'

