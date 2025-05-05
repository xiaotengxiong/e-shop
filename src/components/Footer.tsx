import Link from "next/link";
import { Separator } from "./ui/separator";
import { Title, FooterMenuList } from "@/lib/constants";

export default async function Footer() {
  return (
    <div className="border-t mt-6">
      <div className="container py-32 flex justify-between">
        <h2 className="text-2xl">
          <Link href="/">{Title}</Link>
        </h2>
        <div className="grid-cols-3 flex gap-10">
          {FooterMenuList.map((item, i) => (
            <div key={i} className="flex" >
              {i !== 0 && <Separator orientation="vertical"></Separator>}
              <div className="ml-10" >
                <span>{item.title}</span>
                <ul className="m-4 space-y-3">
                  {item.menus.map((chid, ci) => (
                    <li key={ci} >
                      <Link href={chid.href}>{chid.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
