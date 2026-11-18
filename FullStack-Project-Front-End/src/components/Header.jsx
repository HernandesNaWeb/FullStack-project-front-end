import Logo from "./Logo";
import React, { useState } from 'react';

const Header = () => {
    
const [menuOpen, setOpenMenu] = useState(false);

return (
    <header className="navbar-h">
        <section className="navbar-top-row">
            <div className="">
                <a href="/" aria-label="Digital Store - página inicial">
                    <Logo />
                </a>
            </div>
            <div className="search-container">
                <input 
                type="text" 
                id="searchProducts" 
                className="search-input"
                placeholder="Pesquisar Produto..." />
                    <button 
                    type="submit" 
                    aria-label="Pesquisar" 
                    className="search-btn">
                        <i className="pi pi-search"></i>
                    </button>
            </div>
            <button 
            className="menu-toggle-btn" 
            onClick={() => setOpenMenu(!menuOpen)}
            aria-label="Abrir menu">
                {menuOpen ? '✕' : '☰'}
            </button>
                <div className="cart-PC">
                    <a href="/cadastro" className="btn-cadastro">Cadastre-se</a>
                    <a href="/login" className="btn-entrar">Entrar</a>
                    <button 
                    type="button" 
                    aria-label="Abrir carrinho" 
                    className="cart-btn">
                        <img alt="Carrinho" src="data:image/svg+xml,%3csvg%20width='20'%20height='21'%20viewBox='0%200%2020%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.42233%2017.8203C5.84433%2017.8203%206.18733%2018.1633%206.18733%2018.5853C6.18733%2019.0073%205.84433%2019.3493%205.42233%2019.3493C5.00033%2019.3493%204.65833%2019.0073%204.65833%2018.5853C4.65833%2018.1633%205.00033%2017.8203%205.42233%2017.8203Z'%20stroke='%23C92071'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.6747%2017.8203C17.0967%2017.8203%2017.4397%2018.1633%2017.4397%2018.5853C17.4397%2019.0073%2017.0967%2019.3493%2016.6747%2019.3493C16.2527%2019.3493%2015.9097%2019.0073%2015.9097%2018.5853C15.9097%2018.1633%2016.2527%2017.8203%2016.6747%2017.8203Z'%20stroke='%23C92071'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M0.749878%201.25L2.82988%201.61L3.79288%2013.083C3.87088%2014.018%204.65188%2014.736%205.58988%2014.736H16.5019C17.3979%2014.736%2018.1579%2014.078%2018.2869%2013.19L19.2359%206.632C19.3529%205.823%2018.7259%205.099%2017.9089%205.099H3.16388'%20stroke='%23C92071'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.1254%208.79504H14.8984'%20stroke='%23C92071'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" style={{width: '20px', height: '20px'}} />
                    </button>
                </div>
        </section>
        <nav className={`nav-menu-container ${menuOpen ? 'show' : ''}`}>
            <ul className="nav-links-list">
                <li><a href="/">Home</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/categorias">Categorias</a></li>
                <li><a href="/meus-pedidos">Meus Pedidos</a></li>
                <li className="mobile-only-auth">
                    <hr />
                    <a href="/cadastro" className="mobile-btn-cadastro">Cadastre-se</a>
                    <a href="/login" className="mobile-btn-entrar">Entrar</a>
                </li>
            </ul>
        </nav>
    </header>
     );
}
 
export default Header;