'use server'
import sql from '@/lib/db'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { cookies } from 'next/headers'
const SECRET_KEY = 'xiaotx-e-shop'

// 登录
export const loginAction = async (email: string, password: string) => {
    const result = await sql`select * from users where email = ${email} and password = ${password}`
    const cookie = await cookies()
    if (result.length === 0) {
        return {
            status: 401,
            body: 'login failed'
        }
    } else {

        const token = jwt.sign({
            email,
            name: result[0].name,
            userId: result[0].id
        }, SECRET_KEY, {
            expiresIn: '1h'
        })

        cookie.set({
            name: 'token',
            value: token,
            path: '/',
            maxAge: 60 * 60 * 30 // 30day
        })



        return {
            status: 200,
            body: 'login success'
        }
    }
}

// 注册
export const registeAction = async (email: string, name: string, password: string) => {
    const result = await sql`select * from users where name = ${name}`
    if (result.length > 0) {
        return {
            status: 401,
            body: '账号已存在'
        }
    } else {
        await sql`insert into users (email, name, password) values (${email}, ${name}, ${password})`
        return {
            status: 200,
            body: '注册成功！'
        }
    }
}
// 退出
export const logout =  async () => {
    const cookie = await cookies()
    cookie.delete('token')
    return {
        status: 200,
        body: 'logout success'
    }
}


// 身份验证
export const authAction = async () => {
    const cookie = await cookies()
    const token = cookie.get('token')
    try {
        if (!token) {
            return {
                status: 401,
                body: 'auth failed'
            }
        } else {
            const result = jwt.verify(token.value, SECRET_KEY) as JwtPayload
            return {
                status: 200,
                body: 'auth success',
                data: result
            }
        }
    } catch (error) {
        return {
            status: 401,
            body: 'auth failed'
        }
    }
}

