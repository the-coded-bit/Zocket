import {
  ActionIcon,
  Flex,
  Text,
  Image,
  Avatar,
  Menu,
  Group,
  UnstyledButton,
} from "@mantine/core";
import {
  crownIcon,
  giftIcon,
  notificationIcon,
  downArrowIcon,
} from "../../assets";
import { Navbar } from "../../components";
import "./page.css";

type PageProps = {
  children: string | JSX.Element | JSX.Element[];
};

const _userProfileSection: React.FC<{}> = () => {
  return (
    <Flex
      sx={{ width: "95%", height: "60px" }}
      justify="flex-end"
      align="center"
      gap="lg"
    >
      <Text fw={400} c="rgba(0, 0, 0, 0.6)" fz={12} ff="Eudoxus Sans">
        Free trial ends in 2 days
      </Text>
      <Group spacing={4} className="plan-wrapper">
        <Image src={crownIcon} width={15} height={15} />
        <Text ff={"Eudoxus Sans"} c="#FF8C00" fz={12}>
          Buy Plan
        </Text>
      </Group>
      <Group spacing="xs">
        <Image src={giftIcon} width={20} height={20} />
        <Image src={notificationIcon} width={20} height={20} />
      </Group>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Group spacing={4} sx={{ cursor: "pointer" }}>
            <Avatar radius="xl" />
            <Text c='#1B3F67' ff='Eudoxus Sans'>Mukund Cake shop</Text>
            <Image src={downArrowIcon} width={10} height={10} />
          </Group>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
};

function Page({ children }: PageProps) {
  return (
    <main className="layout-wrapper">
      <aside className="navbar-wrapper">
        <Navbar />
      </aside>
      <aside style={{ width: "100%" }}>
        <section className="user-profile-wrapper">
          <_userProfileSection />
        </section>
        {children}
      </aside>
    </main>
  );
}

export default Page;
