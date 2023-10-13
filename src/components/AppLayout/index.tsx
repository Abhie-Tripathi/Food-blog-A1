import Footer from "./Footer";
import NavBar from "./NavBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default AppLayout;
