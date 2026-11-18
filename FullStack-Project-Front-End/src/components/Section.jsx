import React, { useState } from 'react';
import Product from "./ProductCard";

const Section = ({color= "#8F8F8F", color2= "#C92071"}) => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    
      const slides = [
        { src: '/home-slide-1.jpeg', bgClass: ''},
        { src: '/home-slide-2.jpeg', bgClass: '' },
        { src: '/home-slide-3.jpeg', bgClass: '' },
        { src: '/home-slide-4.jpeg', bgClass: '' },
        { src: '/home-slide-5.jpeg', bgClass: '' },
        { src: '/home-slide-6.jpeg', bgClass: '' },
        { src: '/home-slide-7.jpeg', bgClass: '' },
        { src: '/home-slide-8.jpeg', bgClass: '' },
      ];
    
      const anterior = () => {
        setIndiceAtual((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };
    
      const proxima = () => {
        setIndiceAtual((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      };

    return (
        <main className="flex flex-1 flex-wrap justify-content-center min-h-screen lg:min-h-full l-gray3 l-gray2">
            <section className="flex w-full lg:w-full overflow-hidden">
                <div className="flex flex-column sli text-left w-full lg:w-full">
                    <div className="relative flex" 
                        style={{width:'100%',
                                overflow:'hidden'}}>
                        <div className="flex" 
                            style={{width: '100%', 
                                    height: '100%', 
                                    transform: `translateX(-${indiceAtual * 100}%)`, 
                                    transition: 'transform 0.3s ease-in-out'}}> 
                                    {slides.map((slide, index) => (
                                        <div key={index} className={`${slide.bgClass}`} 
                                            style={{marginLeft:'',
                                                    width: '100%', 
                                                    height: '100%', 
                                                    flexShrink:'0'}}>
                                    <img src={slide.src} alt={`Produto ${index + 1}`} 
                                        style={{width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover', 
                                                display: 'block' }} />
                                    </div>
                                ))}
                        </div> 
                        <button 
                        type="button" 
                        onClick={anterior} 
                        aria-label="Imagem anterior" 
                        className="absolute flex align-items-center justify-content-center" 
                        style={{top: '50%', 
                                left: '55px', 
                                transform: 'translateY(-50%)', 
                                zIndex: 1, width: '40px', 
                                height: '40px', 
                                border: 'none', 
                                borderRadius: '50%', 
                                backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                                color: 'var(--dark-gray-2)', 
                                cursor: 'pointer'}}>
                        <i className="pi pi-angle-left" 
                        style={{ fontSize: '24px' }}>
                        </i>
                        </button>
                        <button 
                        type="button" 
                        onClick={proxima}
                        aria-label="Próxima imagem" 
                        className="absolute flex align-items-center justify-content-center" 
                        style={{top: '50%', 
                                right: '40px', 
                                transform: 'translateY(-50%)', 
                                zIndex: 1, 
                                width: '40px', 
                                height: '40px', 
                                border: 'none', 
                                borderRadius: '50%', 
                                backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                                color: 'var(--dark-gray-2)', 
                                cursor: 'pointer'}}>
                        <i className="pi pi-angle-right" 
                        style={{fontSize: '24px'}}>
                        </i>
                        </button>
                    </div>
                </div>
            </section>
            <section className="flex justify-content-center mt-0 mb-4">
                <div className="grid col-1 lg:col-3 w-screen lg:w-full justify-content-center" 
                    style={{marginLeft:'auto', 
                            marginRight:'auto'}}>
                    <h3 className="w-full lg:w-10 py-4 lg:px-3 ">Coleções em destaque</h3>
                    <img src="/collection-1.png" alt="" className="b-col w-11 lg:w-max" />   
                    <img src="/collection-2.png" alt="" className="b-col w-11 lg:w-max" />
                    <img src="/collection-3.png" alt="" className="b-col w-11 lg:w-max" />
                </div>
            </section>
            <section className="w-screen lg:w-full mb-4 flex justify-content-center flex-column">
                <div className="flex justify-content-center align-items-center">
                    <h3 className="mt-6 mb-4">Coleções em destaque</h3>
                </div>
                <div className="grid justify-content-around w-screen lg:w-5 mx-auto ">
                    <span>
                        <img src="/T-shirt.png" className="d-col"/>
                        <p className="text-center font-bold dt-gray2 text-sm">Camisetas</p>
                    </span>
                    <span>
                        <img src="/leg.png" className="d-col"/>
                        <p className="text-center font-bold dt-gray2 text-sm">Calças</p>
                    </span>
                    <span>
                        <img src="/cap.png" className="d-col"/>
                        <p className="text-center font-bold dt-gray2 text-sm">Bonés</p>
                    </span>
                    <span>
                        <img src="/headphone.png" className="d-col"/>
                        <p className="text-center font-bold dt-gray2 text-sm">Headphones</p>
                    </span>
                    <span>
                        <img src="/sneakers.png" className="d-col"/>
                        <p className="text-center font-bold dt-gray2 text-sm">Tênis</p>
                    </span>
                </div>
            </section>
            <section className="w-full lg:w-11">
                <div className="flex mb-3">
                    <h3 className="mt-2 w-11">Produtos em alta</h3>
                    <a href="/produtos" rel="" className="mt-2 mr-1 w-2 lg:w-max" 
                    style={{color:color2}}>
                    Ver todos
                    </a>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        style={{marginTop:'6px'}}>
                        <path d="M15.5 16.5L20 12L15.5 7.5M20 12H4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke={color2}/>
                        </svg>
                </div>
                <div className="w-full lg:w-full">
                    <Product />
                </div>
            </section>
        </main>
      );
}

 
export default Section;
