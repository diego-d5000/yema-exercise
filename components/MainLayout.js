import NavBar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => (
  <>
    <header className="mb-8">
      <NavBar />
    </header>
    <main className="container mx-auto px-4">
      {children}
    </main>
    <Footer />
  </>
);

export default MainLayout;