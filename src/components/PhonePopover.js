import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function PhonePopover() {

  return (
    <Popover placement="bottom" showArrow={true}>
    <PopoverTrigger>
    <img className="IconPhone" src={require("../img/icon3.png")} />
    </PopoverTrigger>
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">Контакти</div>
        <div className="text-tiny">Телефон: +380808080330</div>
        <div className="text-tiny">Пошта: oleg@gmail.com</div>
      </div>
    </PopoverContent>
  </Popover>
  );
}
