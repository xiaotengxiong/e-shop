"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SideValue } from "@/types/global";
import { SideMenusList } from "@/lib/constants";

export default function Side() {
  const handleValueChange = (value: SideValue) => {
    console.log("value--", value);
  };

  return (
    <div className="w-64 py-4">
      {SideMenusList.map((item, i) => ( 
        <div key={i}>
          <p className="m-5 text-xl">{item.title}</p>
          <ToggleGroup
            type="single"
            className="flex-col gap-3"
            defaultValue="latest"
            onValueChange={handleValueChange}
          >
            {item.menus.map((child, ci) => (
              <ToggleGroupItem key={ci} value={child.value}>
                {child.text}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      ))}
    </div>
  );
}
