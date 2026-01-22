import NavMenu from "@/components/nav/NavMenu";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMenu />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
