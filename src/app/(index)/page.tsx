import Side from "@/components/Side";
import Products from "@/components/Products";
import { productsAction } from '@/actions/product'
export default async function Page() {
  const productRes = await productsAction()
  return (
    <div className="container flex py-6">
      <Side />
      <Products data={productRes.data} />
    </div>
  );
}
