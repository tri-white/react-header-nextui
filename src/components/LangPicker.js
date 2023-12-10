import React from "react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import "../App.css";
export default function LangPicker() {

  return (
    
   <div>
<Select variant="underlined" className="Language" defaultSelectedKeys={["en"]}>
  <SelectItem key="en" value="En">
    En
  </SelectItem>
  <SelectItem key="ukr" value="Ukr">
    Ukr
  </SelectItem>
</Select>
   </div>
  );
}
