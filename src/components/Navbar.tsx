import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";

import { Logo } from "@/components";

export default function Navbar() {
  return (
    <NextNavbar className="bg-primary">
      <NavbarBrand>
        <Link href="/">
          <Logo size="large" />
          <p className="font-bold text-gray-50">NASA SHOWCASE</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-gray-50">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/mars/rovers"
            aria-current="page"
            className="text-gray-50"
          >
            Mars Photos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/info/pod" className="text-gray-50">
            Picture of the Day
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
}
