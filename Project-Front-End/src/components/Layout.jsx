/*Feito por HernandesNaWeb */
import Header from "./Header";
import Footer from "./Footer";
import Children from "./children";


const Layout = () => {
    return (
        <>
        <Header />
        <main className="flex-1">
        <Children />
        </main>
        <Footer />
    </>
    )
}
export default Layout;