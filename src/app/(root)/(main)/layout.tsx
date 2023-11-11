import Footer from "@/components/Footer";
import Nav from "@/components/nav/Nav";
import NavMenu from "@/components/nav/NavMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
