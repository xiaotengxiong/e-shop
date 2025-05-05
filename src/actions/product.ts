'use server'

import sql from '@/lib/db'
import { Product, ProductAction, ProductDetailAction } from '@/types/global'

export async function productsAction(): Promise<ProductAction> {
    const result = await sql`SELECT * FROM products` as Product[]
    return {
        status: 200,
        body: 'get products success',
        data: result
    }
}

export async function productDetailAction(id: number): Promise<ProductDetailAction> {
    const result = await sql`select * from products where id = ${id}` as Product[]
    return {
        status: 200,
        body: 'get products success',
        data: result[0]
    }
}

