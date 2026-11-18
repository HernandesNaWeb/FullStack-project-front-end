import { useState } from "react";
import Product from "./ProductCard";

const ProductList = () => {
    const [filterOpen, setfilterMenu] = useState(false);     
    return ( 
        <>
        <div className="flex filter">
            <aside className="ml-1 lg:ml-7 w-11 mx-auto lg:w-max">
                <div className="w-full lg:w-max  filter-op mb-2">
                    <label className="flex py-2 px-1 border-round-md border-1 w-12 lg:w-full">
                        <span className="mr-1 my-auto font-bold text-base dt-gray2 ml-1 w-max lg:w-full">
                            Ordernar por: 
                        </span>
                        <div className="my-auto w-max lg:w-full">
                            <select name="products" className="mr-3 pr-4 text-base white-space-nowwrap w-full lg:w-full ">
                                <option 
                                value="">mais relevantes
                                </option>
                                <option 
                                value="asc">maior preço
                                </option>
                                <option value="desc">menor preço
                                </option>
                            </select>
                        </div>
                    </label>
                </div>
                <section className="flex">
                    <div className="w-9 lg:w-11 ml-2">
                        <button 
                            className="menu-toggle-btn bg-pri" 
                            onClick={() => setfilterMenu(!filterOpen)}
                            aria-label="Abrir filtro">    
                            {filterOpen ? <img src="/xis.png" alt="" className="" 
                                style={{width:'15px', 
                                        height:'15px', 
                                        opacity:'50%'}}/>
                                        : <img src="/filter2.png" className="p-2 border-round-sm bg-pri" 
                                            style={{width:'35px', 
                                                    height:'30px'}}/>}
                        </button>
                        <nav className={`nav-menu-container ${filterOpen ? 'show' : ''}`} 
                        style={{background:'white'}}>
                            <div>
                                <span className="ml-2 font-bold dt-gray2">Filtrar por</span>
                                <hr className="w-8 lg:w-full lt-gray2" 
                                style={{height:'1px'}}/>
                            </div>
                            <div>
                                <form>
                                <fieldset className="flex border-none flex-column h-max justify-content-center">
                                    <legend className="font-bold dt-gray2 mb-1">Marca</legend>
                                        <div className="flex flex-column">
                                            <label className="text-sm font-light dt-gray2 mb-1">
                                                <input type="checkbox" value="Adidas" name="marca" className="cursor-pointer" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Adidas
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" value="Calenciaga" name="marca" className="cursor-pointer" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Calenciaga
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" value="" name="marca" className="cursor-pointer" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            K-Swiss
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" value="" name="marca" className="cursor-pointer" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Nike
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" value="" name="marca" className="cursor-pointer" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Puma
                                            </label>
                                        </div>
                                    <legend className="font-bold dt-gray2 mt-2 mb-1">Categorias</legend>
                                        <div className="flex flex-column">
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Esporte e Lazer
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Casual
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Utilitário
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Corrida
                                            </label>
                                        </div>
                                    <legend className="font-bold dt-gray2 mt-2 mb-1">Gênero</legend>
                                        <div className="flex flex-column">
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Masculino
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Feminino
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                                <input type="checkbox" 
                                                    style={{width:'21px', 
                                                            height:'21px'}}/>
                                                            Unisex
                                            </label>
                                        </div>
                                    <legend className="font-bold dt-gray2 mt-2 mb-1">Estado</legend>
                                        <div className="flex flex-column h-max">
                                            <label className="text-sm dt-gray2">
                                            <input type="radio" value="Novo" name="Estado" className="" 
                                            style={{width:'21px', 
                                                    height:'21px'}}/>
                                                    Novo
                                            </label>
                                            <label className="text-sm dt-gray2 mb-1">
                                            <input type="radio" value="Usado" name="Estado" 
                                            style={{width:'21px', 
                                                    height:'21px'}}/>
                                                    Usado
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <button type="reset" className="bg-pri-t underline text-sm mt-2 border-none cursor-pointer" 
                                                style={{background:'transparent'}}>
                                                Limpar filtros
                                                </button>
                                            </label>
                                        </div>
                                </fieldset>
                                </form>
                            </div>
                    </nav>
                    </div>
                </section>
            </aside>        
            <Product/>
        </div>
        </>
     );
}
 
export default ProductList;