"use client";
import { useState } from "react";
import Link from "next/link";
import { GrBottomCorner } from "react-icons/gr";
import MenuItem from "./MenuList";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu: React.FC = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <div className="flex flex-col gap-7 md:flex-row">
      <Link href="/">
        <MenuItem label="Главное" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <MenuItem label="Услуги" />
            <GrBottomCorner className="ml-0.5 text-sm" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/about">
        <MenuItem label="О Нас" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <MenuItem label="Помощь" />
            <GrBottomCorner className="ml-0.5 text-sm" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">
              <Link href="/products">
                <MenuItem label="Перевозка товаров " />
              </Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">
              <Link href="/products">
                <MenuItem label="Выкуп товаров с китайских сайтов" />
              </Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">
              <Link href="/products">
                <MenuItem label="Доставка товаров из Китая для маркетплейсов" />
              </Link>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/products">
        <MenuItem label="Карго доставка из Китая" />
      </Link>
    </div>
  );
};

export default UserMenu;
