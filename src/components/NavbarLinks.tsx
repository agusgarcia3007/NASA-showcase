"use client";

import { NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export default function NavbarLinks() {
  const pathname = usePathname();
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/mars/rovers",
      label: "Mars Photos",
    },
    {
      href: "/info/pod",
      label: "Picture of the Day",
    },
  ];

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {links.map((link) => (
        <NavbarItem key={link.href} isActive={isActive(link.href)}>
          <Link
            href={link.href}
            className={clsx(
              "text-lg text-gray-50 p-1",
              isActive(link.href) && "border-b font-bold"
            )}
          >
            {link.label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}
