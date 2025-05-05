'use server'

import sql from '@/lib/db'
import { Product, ProductAction } from '@/types/global'

export async function productsAction(): Promise<ProductAction> {
    const result = await sql`SELECT * FROM products` as Product[]
    return {
        status: 200,
        body: 'get products success',
        data: result
    }
}
