import Logo from "./Logo";

const Footer = () => {

    return ( 
        <footer className="d-gray whi-t" style={{marginTop:''}}>
            <div className="footer-PC w-full mx-auto">
                <div className="foot-PCA flex-column ml-5 w:1 lg:w-3">
                    <div className="foot-PCA-lo">
                        <Logo color="#ffffff" />
                        <p className="w-full w-6 lg:w-10 mb-5" style={{}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                    <div className="w-2 lg:w-4 flex mt-2 foot-PCA-li">
                        <a><img src="src/assets/facebook.svg" alt="" /></a>
                        <a className="mx-auto"><img src="src/assets/instagram.svg" alt="" /></a>
                        <a><img src="src/assets/twitter.svg" alt="" /></a>
                    </div>
                    </div>           
                </div>
                <div className="w-12 lg:w-9 foot-PCA">
                    <div className="foot-PCA grid lg:flex gap-7 lg:gap-4 mt-3 lg:mx-auto">
                        <div className="foot-PCA-d mr-8 lg:mr-3 foot-PCA-liw">
                            <h3>Informação</h3>
                            <a href="/about" className="foot-PCA-liw"><p>Sobre o Drip</p></a>
                            <a href="/security" className="foot-PCA-liw"><p>Segurança</p></a>
                            <a href="/wishlist" className="foot-PCA-liw"><p>Whishlist</p></a>
                            <a href="/blog" className="foot-PCA-liw"><p>Blog</p></a>
                           <a href="/jobs" className="foot-PCA-liw"><p>Trabalhe Conosco</p></a>
                           <a href="/login" className="foot-PCA-liw"><p>Meus Pedidos</p></a>
                        </div>            
                        <div className="foot-PCA-d ml-5 lg:ml-6">
                            <h3>Categorias</h3>
                            <a href="/camisetas" className="foot-PCA-liw"><p>Camisetas</p></a>
                            <a href="/calças" className="foot-PCA-liw"><p>Calças</p></a>
                            <a href="/bones" className="foot-PCA-liw"><p>Bonés</p></a>
                            <a href="/headphones" className="foot-PCA-liw"><p>Headphones</p></a>
                            <a href="/tenis" className="foot-PCA-liw"><p>Tênis</p></a>
                        </div>
                    </div>
                    <div className="ml-6 lg:mx-auto mt-3 ">
                        <h3>Contato</h3>
                        <p>Av. Santos Dummound, 1510-1 andar, Aldeota, Fortaleza - CE, 60150-161</p> <br className="mb-4"/>
                        <p>(85) 3051-3411</p>
                    </div>
                    <br />
                </div>
            </div>
                <div className="flex flex-column justify-content-center" style={{marginBottom:''}}>
                    <hr className="w-11 mx-auto" style={{borderTop: '1px solid white', borderRight: '0px', borderBottom: '0px', borderLeft: '0px', borderImage: 'none', margin: '48px 6px 32px'}} />
                    <p className="mx-auto mb-4 mt-0 pb-2 text-sm" style={{}}>© 2026 Digital Store</p>
                </div>           
        </footer>
     );
}
 
export default Footer;