import React, { useState } from "react";
import { Flex, ThemeIcon, Image, Text } from "@mantine/core";
import "./navbar.css";
import {
  logo,
  houseLogo,
  profileIcon,
  bagIcon,
  volumeIcon,
} from "../../assets";

enum NavigationOptions {
  HOME = "Home",
  CAMPAIGN = "Campaign",
  PRODUCTS = "Products",
  CUSTOMERS = "Customers",
}

type Options = {
  title: NavigationOptions;
  src: string;
};

const navigationOptions: Options[] = [
  { title: NavigationOptions.HOME, src: houseLogo },
  { title: NavigationOptions.CAMPAIGN, src: volumeIcon },
  { title: NavigationOptions.PRODUCTS, src: bagIcon },
  { title: NavigationOptions.CUSTOMERS, src: profileIcon },
];

const Navbar: React.FC<{}> = () => {
  const [active, setActive] = useState<NavigationOptions>(
    NavigationOptions.CAMPAIGN
  );
  return (
    <Flex
      sx={{ width: "100%", height: "100%", paddingTop: "2rem" }}
      direction="column"
      justify="flex-start"
      align="center"
      gap={63}
    >
      <ThemeIcon radius="lg" size="lg">
        <Image src={logo} />
      </ThemeIcon>
      <Flex direction="column" gap="lg">
        {navigationOptions.map((item) => (
          <NavOptions
            title={item.title}
            src={item.src}
            active={active}
            changeActiveCallback={setActive}
          />
        ))}
      </Flex>
    </Flex>
  );
};
const activeStateStyles: React.CSSProperties = {
  backgroundColor: "rgba(25, 119, 243, 0.1)",
  borderLeft: "5px solid #1977F3",
  cursor: "pointer",
  borderRadius: "0px 2px 2px 0px",
};

const NavOptions = ({
  title,
  src,
  active,
  changeActiveCallback,
}: Options & {
  active: NavigationOptions;
  changeActiveCallback: React.Dispatch<React.SetStateAction<NavigationOptions>>;
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={8}
      style={active === title ? activeStateStyles : { cursor: "pointer" }}
      onClick={() => {
        changeActiveCallback(title);
      }}
    >
      <Image src={src} width={21} height={21} />
      <Text fz={12} c="#ffffff" fw={500} ff="Eudoxus Sans">
        {title}
      </Text>
    </Flex>
  );
};

export default Navbar;
