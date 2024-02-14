import ThemeDarkSwitch from "@/theme/ThemeDarkSwitch";
import {
  Link,
  LinkProps,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { LayoutStore } from "../helper/LayoutHelper";
import NavbarLogo from "../logo/NavbarLogo";
import { usePathname, useRouter } from "next/navigation";

function NavbarItem_Constom(props: LinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname == props.href);
  }, [pathname, props.href]);

  return (
    <NavbarItem isActive={isActive}>
      <Link color={isActive ? "primary" : "foreground"} {...props}></Link>
    </NavbarItem>
  );
}

export default function Header() {
  let { maxWidth_CONST } = LayoutStore;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["产品", "治理"];

  return (
    <Navbar isBordered maxWidth={maxWidth_CONST} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarLogo />
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarLogo />

        <NavbarItem_Constom href="/">产品</NavbarItem_Constom>
        <NavbarItem_Constom href="/airdrop">空投</NavbarItem_Constom>
        <NavbarItem_Constom
          href="https://xoxo3.notion.site/xoxo3/XOXO3-love-34542c6cffe6426d93371aadc5d32bb5"
          target="_blank"
        >
          治理
        </NavbarItem_Constom>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeDarkSwitch />
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
