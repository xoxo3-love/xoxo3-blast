import { Image, Link, NavbarBrand as Nextui_NavbarBrand } from "@nextui-org/react";
// import Logo from "./Logo";

export default function NavbarLogo() {
  return (
    <Nextui_NavbarBrand>
      {/* <Logo /> */}
      <Link color="foreground" href="/">
        <Image src="./logo-rectangle.png" height={30} radius="sm" className="h-[30px]" />
        {/* <p className="font-bold text-inherit">Web3Name</p> */}
      </Link>
    </Nextui_NavbarBrand>
  );
}
