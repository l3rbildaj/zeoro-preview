
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {


  return (
    <div className="min-h-screen mx-auto max-w-[1550px] flex flex-col">
      {/* <Header  /> */}
      <main className=" box-border">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
