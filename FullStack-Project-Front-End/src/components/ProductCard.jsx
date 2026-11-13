import { useState, useEffect } from 'react';


const Product = ({id, filter, image, name, price, priceDiscount }) => {
    const [products, setProducts] = useState([]);

    async function cardProduct() {
        try {
            const request = await fetch('Products.json');
            const data = await request.json();
            
            setProducts(data.Products); 
        } catch (error) {
            console.error("Erro ao carregar o arquivo JSON:", error);
        }
    }

    useEffect(() => {
        cardProduct();
    }, []);
    return (

        <>
            <section className="grid ml-2 mt-0 w-12 product"> 
                <h2 className="ml-2 mt-0 text-md">produtos encontrados</h2> 
                <ul className="flex col-4 lg:col-11 justify-content-center flex-wrap list-none px-0 mx-auto gap-4" >
                    {products && products.map((product) => (    
                        <a href="/detalhes-produtos" className="no-underline" style={{color: 'inherit', textDecoration:'none'}}>
                        <li key={product.id} className="mx-2 my-3 lg:mx-1">
                            <div className=" shadow-2 p-1 border-round-md flex-wrap">
                            <p className='relative ml-3 uppercase border-round-3xl w-max lg:w-max p-2 px-2 font-bold ' style={{background:'#e7ff86'}}>30% off</p>
                                <div className="justify-content-around mx-3">
                                    <img className="" style={{width:'292px',height:'321px', objectFit:'contain'}} src={product.image} alt={product.name} />
                                </div>
                            </div>
                                <h3 className="mb-0 white-space-nowwrap overflow-hidden text-overflow-ellipsis">{product.name}</h3>
                            <div className='flex'>
                                <h2 className="lt-gray py-1 px-2 w-max line-through font-normal">$ {product.price}</h2>
                                <h2 className=" dt-gray py-1 px-2 border-round-md font-bold">${product.priceDiscount}</h2>
                            </div>
                            
                        </li>
                    </a>
                        ))
                    }
                </ul>
            </section>
        </>
     );
}
 
export default Product;