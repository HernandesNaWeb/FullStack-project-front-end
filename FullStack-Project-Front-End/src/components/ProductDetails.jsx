import React, { useState } from 'react';

const ProductDetails = ({color= "#8F8F8F", color2= "#C92071"}) => {

  const [indiceAtual, setIndiceAtual] = useState(0);

  const slides = [
    { src: '/product-thumb-1.jpeg', bgClass: 'bg-pur '},
    { src: '/product-thumb-2.jpeg', bgClass: 'bg-yel' },
    { src: '/product-thumb-3.jpeg', bgClass: 'bg-pin' },
    { src: '/product-thumb-4.jpeg', bgClass: 'bg-gol' },
    { src: '/product-thumb-5.jpeg', bgClass: 'bg-cob' },
  ];

  const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const proxima = () => {
    setIndiceAtual((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
    const [buttonPress, setbuttonPress] = useState(false);
   
    function ListaDeBotoes() {
  // Guarda o ID do botão selecionado, e não apenas true/false
  const [botaoSelecionadoId, setBotaoSelecionadoId] = useState(null);

  const botoes = [
    { id: 1, texto: 'Opção A' },
    { id: 2, texto: 'Opção B' },
    { id: 3, texto: 'Opção C' },
    
  ];
}
    return ( 
        <>
        <section className="mx-auto" style={{width:'90%'}}>
            <div  className="flex pro-d">
                <div className="mx-auto lg:ml-7 my-auto">
                <div className="flex flex-row">
                    <p className="mb-3 dt-gray2 w-full lg:w-full">
                    <i className="font-bold mt-0">Home</i> / Produtos / Tênis / Tênis Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
                </div>
                <div className="flex">
                    <span className='pro-d'>
                            <div className="relative im-p flex border-round-sm im-p" style={{width: '705px',height: '500px', overflow: 'hidden'}}>
                                <div className="flex" style={{width: '100%', height: '100%', transform: `translateX(-${indiceAtual * 100}%)`, transition: 'transform 0.3s ease-in-out'}}> {slides.map((slide, index) => (
                                    <div key={index} className={`${slide.bgClass} flex align-items-center justify-content-center`} 
                                    style={{ minWidth: '100%', height: '100%'}}>
                                    <img src={slide.src} alt={`Produto ${index + 1}`} style={{ width: '580px', height: '500px', objectFit: 'cover' }} />
                                    </div>
                                    ))}
                                </div>
                                <button type="button" onClick={anterior} aria-label="Imagem anterior" className="absolute flex align-items-center justify-content-center" 
                                    style={{top: '50%', left: '16px', transform: 'translateY(-50%)', zIndex: 1, width: '40px', height: '40px', border: 'none', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.7)', color: 'var(--dark-gray-2)', cursor: 'pointer'}}>
                                    <i className="pi pi-angle-left" style={{ fontSize: '24px' }}></i>
                                </button>

                                <button type="button" onClick={proxima}aria-label="Próxima imagem" className="absolute flex align-items-center justify-content-center" 
                                    style={{top: '50%', right: '16px', transform: 'translateY(-50%)', zIndex: 1, width: '40px', height: '40px', border: 'none', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.7)', color: 'var(--dark-gray-2)', cursor: 'pointer'}}>
                                    <i className="pi pi-angle-right" style={{ fontSize: '24px' }}></i>
                                </button>
                            </div>
                        <div className="flex h-minlg:h-max mt-3" style={{}}>
                            <div className=" border-round-md mr-3 py-2" style={{height:'95px'}}>
                                <img src="public/product-thumb-1.jpeg" alt="" className="border-1 bg-pur border-round-md" style={{width:'110px', height:'80px', objectFit:'cover'}}/>
                            </div>
                            <div className=" border-round-md ml-2 mr-3 py-2" style={{height:'95px'}}>
                                <img src="public/product-thumb-2.jpeg" alt="" className="border-1 bg-yel border-round-md" style={{width:'110px', height:'80px', objectFit:'cover'}}/>
                            </div>
                            <div className=" border-round-md ml-2 mr-3 py-2" style={{height:'95px'}}>
                                <img src="public/product-thumb-3.jpeg" alt="" className="border-1 bg-pin border-round-md" style={{width:'110px', height:'80px', objectFit:'cover'}}/>
                            </div>
                            <div className=" border-round-md ml-2 mr-3 py-2" style={{height:'95px'}}>
                                <img src="public/product-thumb-4.jpeg" alt="" className="border-1 bg-gol border-round-md" style={{width:'110px', height:'80px', objectFit:'cover'}}/>
                            </div>
                            <div className=" border-round-md ml-2 py-2" style={{height:'95px'}}>
                                <img src="public/product-thumb-5.jpeg" alt="" className="border-1 bg-cob border-round-md" style={{width:'110px', height:'80px', objectFit:'cover'}}/>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
                <div className="justify-content-right mt-3 w-10 lg:w-6 mx-6">
                    <h1 className="dt-gray text-5xl w-12 lg:w-9 mt-0 mb-auto">Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <p className="dt-gray3 my-3 font-medium" style={{}}>Casual | Nike | REF:38416711</p>
                    <div className="flex w-8 my-1">
                        <svg width="94" height="50" viewBox="0 0 94 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11294 0.730597L9.9622 5.15038L14.6966 5.56108C15.0249 5.58972 15.1585 6.00343 14.9092 6.22122L11.3182 9.36292L12.3943 14.0367C12.4689 14.3614 12.1204 14.6169 11.8383 14.4443L7.76965 11.9666L3.70097 14.4443C3.41814 14.6162 3.07037 14.3607 3.145 14.0367L4.22113 9.36292L0.629315 6.22047C0.38006 6.00268 0.512897 5.58896 0.842003 5.56033L5.57636 5.14962L7.42562 0.730597C7.55398 0.423134 7.98458 0.423134 8.11294 0.730597Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                        <path d="M27.4962 0.730597L29.3455 5.15038L34.0799 5.56108C34.4082 5.58972 34.5418 6.00343 34.2925 6.22122L30.7015 9.36292L31.7776 14.0367C31.8522 14.3614 31.5037 14.6169 31.2216 14.4443L27.153 11.9666L23.0843 14.4443C22.8014 14.6162 22.4537 14.3607 22.5283 14.0367L23.6044 9.36292L20.0126 6.22047C19.7634 6.00268 19.8962 5.58896 20.2253 5.56033L24.9597 5.14962L26.8089 0.730597C26.9373 0.423134 27.3679 0.423134 27.4962 0.730597Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                        <path d="M46.881 0.730597L48.7303 5.15038L53.4646 5.56108C53.793 5.58972 53.9266 6.00343 53.6773 6.22122L50.0862 9.36292L51.1624 14.0367C51.237 14.3614 50.8885 14.6169 50.6064 14.4443L46.5377 11.9666L42.469 14.4443C42.1862 14.6162 41.8384 14.3607 41.9131 14.0367L42.9892 9.36292L39.3974 6.22047C39.1481 6.00268 39.281 5.58896 39.6101 5.56033L44.3444 5.14962L46.1937 0.730597C46.322 0.423134 46.7526 0.423134 46.881 0.730597Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                        <path d="M66.2667 0.730597L68.116 5.15038L72.8504 5.56108C73.1787 5.58972 73.3123 6.00343 73.0631 6.22122L69.472 9.36292L70.5481 14.0367C70.6227 14.3614 70.2742 14.6169 69.9921 14.4443L65.9235 11.9666L61.8548 14.4443C61.5719 14.6162 61.2242 14.3607 61.2988 14.0367L62.3749 9.36292L58.7831 6.22047C58.5339 6.00268 58.6667 5.58896 58.9958 5.56033L63.7302 5.14962L65.5794 0.730597C65.7078 0.423134 66.1384 0.423134 66.2667 0.730597Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                        <path d="M85.651 0.730597L87.5003 5.15038L92.2346 5.56108C92.563 5.58972 92.6966 6.00343 92.4473 6.22122L88.8563 9.36292L89.9324 14.0367C90.007 14.3614 89.6585 14.6169 89.3764 14.4443L85.3077 11.9666L81.2391 14.4443C80.9562 14.6162 80.6085 14.3607 80.6831 14.0367L81.7592 9.36292L78.1674 6.22047C77.9181 6.00268 78.051 5.58896 78.3801 5.56033L83.1144 5.14962L84.9637 0.730597C85.0921 0.423134 85.5227 0.423134 85.651 0.730597Z" stroke="#F6AA1C"/>
                        </svg>
                        <p className="border-round-sm bg-wrn px-2 mx-3 w-max font-bold text-lg my-auto text-center whi-t">4.7 
                        <img src="./public/star.png" className="ml-2" style={{width:'15px', height:'13px'}}/>
                        </p> 
                        <p className="lt-gray">(90 avaliações)</p>
                    </div>
                    <div className="flex dt-gray" style={{height:'60px'}}>
                        <p className="dt-gray2 text-lg mt-4 mr-1 mb-2">R$</p>
                        <p className="dt-gray2 text-5xl mt-1 font-bold">219,00</p>
                        <p className="line-through text-lg lt-gray2 mt-4 ml-2">219,00</p>
                    </div>
                    <div>
                        <p className="font-bold text-base mb-0" style={{color}}>Descrição do Produto</p>
                        <p className="dt-gray2 text-sm" style={{width:'65%', marginTop:'5px', marginBottom:'2px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p className="font-bold text-base mb-3 mt-1" style={{color}}>Tamanho</p>
                    </div>
                    <div>
                        <button type="button" aria-label="39" aria-pressed="true" className="border-round-md border-1 mr-1 p-2 text-2xl font-bold dt-gray2 cursor-pointer px-2" style={{minWidth: '46px', height: '46px'}}>39</button>
                        <button type="button" aria-label="39" aria-pressed="true" className="border-round-md border-1 mr-1 p-2 text-2xl font-bold dt-gray2 cursor-pointer px-2" style={{minWidth: '46px', height: '46px'}}>40</button>
                        <button type="button" aria-label="39" aria-pressed="true" className="border-round-md border-1 mr-1 p-2 text-2xl font-bold dt-gray2 cursor-pointer px-2" style={{minWidth: '46px', height: '46px'}}>41</button>
                        <button type="button" aria-label="39" aria-pressed="true" className="border-round-md border-1 mr-1 p-2 text-2xl font-bold dt-gray2 cursor-pointer px-2" style={{minWidth: '46px', height: '46px'}}>42</button>
                        <button type="button" aria-label="39" aria-pressed="true" className="border-round-md border-1 mr-1 p-2 text-2xl font-bold dt-gray2 cursor-pointer px-2" style={{minWidth: '46px', height: '46px'}}>43</button>
                    </div>
                    <p className="font-bold text-base mb-0" style={{color}}>Tamanho</p>
                    <div className="flex mb-3">
                      <label>
                            <button type="button" onClick={() => setbuttonPress(!buttonPress)} className='my-auto border-none p-0 mt-0 border-circle' style={{backgroundColor:'transparent'}}>
                            {buttonPress ? <p className="border-circle mx-1 border-3" style={{width:'40px', height:'40px', borderColor:'#C92071', background:'#6feeff'}}/> : <p className="border-circle mx-1" style={{width:'40px', height:'40px', background:'#6feeff', border:'1px solid white'}}/>}
                            </button>
                        </label>
                        <label>
                            <button type="button" onClick={() => setbuttonPress(!buttonPress)} className='my-auto border-none p-0 mt-0 border-circle' style={{backgroundColor:'transparent'}}>
                            {buttonPress ? <p className="border-circle mx-1 border-3" style={{width:'40px', height:'40px', borderColor:'#C92071', background:'#ff6969'}}/> : <p className="border-circle mx-1" style={{width:'40px', height:'40px', background:'#ff6969', border:'1px solid white'}}/>}
                            </button>
                        </label>
                        <label>
                            <button type="button" onClick={() => setbuttonPress(!buttonPress)} className='my-auto border-none p-0 mt-0 border-circle' style={{backgroundColor:'transparent'}}>
                            {buttonPress ? <p className="border-circle mx-1 border-3" style={{width:'40px', height:'40px', borderColor:'#C92071', background:'#5e5e5e'}}/> : <p className="border-circle mx-1" style={{width:'40px', height:'40px', background:'#5e5e5e', border:'1px solid white'}}/>}
                            </button>
                        </label>
                        <label>
                            <button type="button" onClick={() => setbuttonPress(!buttonPress)} className='my-auto border-none p-0 mt-0 border-circle' style={{backgroundColor:'transparent'}}>
                            {buttonPress ? <p className="border-circle mx-1 border-3" style={{width:'40px', height:'40px', borderColor:'#C92071', background:'#6d70b7'}}/> : <p className="border-circle mx-1" style={{width:'40px', height:'40px', background:'#6d70b7', border:'1px solid white'}}/>}
                            </button>
                        </label>

                    </div>
                    <a className="border-round-md bg-wrn text-2xl font-medium p-2 px-7 uppercase lt-gray3">comprar</a>
                </div>
            </div>
        </section>
        <section className="">
            <div className="flex mx-auto " style={{width:'90%', height:'65px'}}>
                <p className="font-base mb-2 my-auto font-bold dt-gray2" style={{width:'90%'}}>Produtos Relacionados</p>
                <a href="/produtos" className="font-base my-auto bg-pri-t">Ver todos</a>
                <div className="mt-3">
                    <svg width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative" style={{marginTop:'2px'}}>
                    <path d="M15.5 16.5L20 12L15.5 7.5M20 12H4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke={color2}/>
                    </svg>
                </div>
            </div>
            <div className="grid mx-auto m-4 lg:m-3 prod-t">
                <ul className="flex col-12 lg:col-12 justify-content-center flex-wrap list-none px-0" >    
                    <li className="mx-2 my-3 lg:mx-2">
                        <div className=" shadow-2 p-1 border-round-md flex-wrap">
                            <div className="justify-content-around mx-3">
                                <img className="" style={{width:'292px',height:'321px', objectFit:'contain'}} src="./public/produc-image-22.jpg" alt="" />
                            </div>
                        </div>
                        <h3 className="mb-0 white-space-nowwrap overflow-hidden text-overflow-ellipsis">Nike Air Force 1 '07 Mini Jewel</h3>
                        <h2 className="mb-0">$ 200</h2>
                        <h2 className="whi dt-gray2 py-1 px-2 border-round-md align-middle">$100</h2>
                        <p className='uppercase border-round-3xl w-max lg:w-max p-2 text-bold' style={{background:'#e7ff86'}}>30% off</p>
                    </li>   
                    <li className="mx-2 my-3 lg:mx-2">
                        <div className=" shadow-2 p-1 border-round-md flex-wrap">
                            <div className="justify-content-around mx-3">
                                <img className="" style={{width:'292px',height:'321px', objectFit:'contain'}} src="./public/produc-image-22.jpg" alt="" />
                            </div>
                        </div>
                        <h3 className="mb-0 white-space-nowwrap overflow-hidden text-overflow-ellipsis">Nike Air Force 1 '07 Mini Jewel</h3>
                        <h2 className="mb-0">$ 200</h2>
                        <h2 className="whi dt-gray2 py-1 px-2 border-round-md align-middle">$100</h2>
                        <p className='uppercase border-round-3xl w-max lg   :w-max p-2 text-bold' style={{background:'#e7ff86'}}>30% off</p>
                    </li>    
                    <li className="mx-2 my-3 lg:mx-2">
                        <div className=" shadow-2 p-1 border-round-md flex-wrap">
                            <div className="justify-content-around mx-3">
                                <img className="" style={{width:'292px',height:'321px', objectFit:'contain'}} src="./public/produc-image-22.jpg" alt="" />
                            </div>
                        </div>
                        <h3 className="mb-0 white-space-nowwrap overflow-hidden text-overflow-ellipsis">Nike Air Force 1 '07 Mini Jewel</h3>
                        <h2 className="mb-0">$ 200</h2>
                        <h2 className="whi dt-gray2 py-1 px-2 border-round-md align-middle">$100</h2>
                        <p className='uppercase border-round-3xl w-max lg:w-max p-2 text-bold' style={{background:'#e7ff86'}}>30% off</p>
                    </li>   
                    <li className="mx-2 my-3 lg:mx-2">
                        <div className=" shadow-2 p-1 border-round-md flex-wrap">
                            <div className="justify-content-around mx-3">
                                <img className="" style={{width:'292px',height:'321px', objectFit:'contain'}} src="./public/produc-image-22.jpg" alt="" />
                            </div>
                        </div>
                        <h3 className="mb-0 white-space-nowwrap overflow-hidden text-overflow-ellipsis">Nike Air Force 1 '07 Mini Jewel</h3>
                        <h2 className="mb-0">$ 200</h2>
                        <h2 className="whi dt-gray2 py-1 px-2 border-round-md align-middle">$100</h2>
                        <p className='uppercase border-round-3xl w-max lg:w-max p-2 text-bold' style={{background:'#e7ff86'}}>30% off</p>
                    </li>
                </ul>
            </div>
        </section>
        </>
     );
}
 
export default ProductDetails;