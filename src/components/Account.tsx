"use client"
import { JwtPayload } from 'jsonwebtoken'
import { Button} from './ui/button'
import { logout } from '@/actions/users'
import { useRouter } from 'next/navigation'
import Address from '@/components/Address'
export default function Account({ authData }: {authData: JwtPayload}) {
    const router = useRouter()
    const handleClick = async () => {
        const result = await logout()
        if (result.status === 200) {
            router.refresh()
        }
    }
    return (
       <div className="container2 py-10">
            <div className="border-b py-4">
                <h2 className="text-lg leading-10 font-bold">Account</h2>
                <div className="flex justify-between items-center">
                    <div>
                        <p>登录名称: {authData.name}</p>
                        <p>邮箱: {authData.email}</p>
                    </div>
                    <Button onClick={handleClick} >Logout</Button>
                </div>
            </div>
            <div className="border-b py-4">
                <h2 className='text-lg leading-10 font-bold'>Address</h2>
                <div>
                    <p>you can add as many as you like</p>
                    <p>Saving your adderess will make them available during checkout</p>
                </div>
                {/* todo 添加地址 */}
            </div>
            <div className="py-4">
                <h2 className="text-lg leading-10 font-bold">Orders</h2>
                <div>
                    订单列表
                    <Address></Address>
                </div>
            </div>
       </div>
    )
}

