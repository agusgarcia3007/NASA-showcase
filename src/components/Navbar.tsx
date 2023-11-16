import { Navbar as NextNavbar, NavbarBrand } from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";

import { Logo } from "@/components";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <NextNavbar className="bg-primary" position="static">
      <NavbarBrand>
        <Link href="/">
          <Logo size="large" />
          <p className="font-bold text-gray-50">NASA SHOW</p>
        </Link>
      </NavbarBrand>
      <NavbarLinks />
    </NextNavbar>
  );
}
