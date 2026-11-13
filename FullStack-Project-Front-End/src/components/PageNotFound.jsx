const NotFound = () => {
    return (
        <>
        <div className="flex flex-column align-items-center mt-6 " style={{marginBottom:'113px'}}>
            <form className="p-4 whi border-round-lg align-items-center text-center justify-content-center">
                <h2>Página não encontrada</h2>
                <p className="mb-4 w-4 lg:w-10 mx-auto font-light text-sm dt-gray">O endereço que você acessou não existe ou foi movido.</p>
                <p className="">
                    <a href="/" className="bg-pri border-round-sm font-bold whi-t no-underline p-2 text-sm px-8">
                    Voltar para Home
                </a></p>
                
            </form>
        </div>
        </>
    );
}
 
export default NotFound;