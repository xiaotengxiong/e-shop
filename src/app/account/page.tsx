import NotAccount from "@/components/NotAccount";
import Account from "@/components/Account";
import { authAction } from "@/actions/users";
import { JwtPayload } from 'jsonwebtoken'
export default async function Page() {
  const auth = await authAction()
  return (
    <>
    { auth.status === 200?<Account authData={auth.data as JwtPayload} />:<NotAccount />}
    </>
  );
}
