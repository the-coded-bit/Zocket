import { Navbar } from "../../components";
import "./page.css";

type PageProps = {
  children: string | JSX.Element | JSX.Element[];
};

function Page({ children }: PageProps) {
  return (
    <main className="layout-wrapper">
      <aside className="navbar-wrapper">
        <Navbar />
      </aside>
      <aside>{children}</aside>
    </main>
  );
}

export default Page;
