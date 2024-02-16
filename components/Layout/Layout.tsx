import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Cart from "../../components/Cart/Cart";
import { useAppSelector } from "../../Hooks/hooks";

type Props = { children: React.ReactNode };
const Layout: React.FC<Props> = ({ children }) => {

  const showNavbar = useAppSelector((state) => state.ui.navbarOpen);
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Header />
      {showNavbar && <Menu />}
      {showCart && <Cart />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
