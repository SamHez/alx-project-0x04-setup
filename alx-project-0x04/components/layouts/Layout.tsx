import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="pt-24">{/* pt-24 to account for fixed header */}
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
