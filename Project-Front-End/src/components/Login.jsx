const Login = () => {
    return ( 
        <>
        <section className="flex flex-column align-items-center p-6" style={{background:'#BBBCF3'}}>
            <div className="whi border-round-md w-full lg:w-3 justify-content-center align-items-center text-center">
                <h1 className="lg:w-max mx-auto text-2xl">Acesse sua conta</h1>
                <p className="font-medium dt-gray2 text-sm">Novo cliente? Então registre-se <a href="/cadastro" style={{textDecoration:'underline', color:'#666666'}}>aqui</a></p>
                <form className="flex flex-column text-left mt-3">
                    <label htmlFor="email" className="font-bold text-xs mb-2 ml-3">Email*</label>
                    <input 
                        type="text" id="login" placeholder="Insira seu Login ou email" className="mb-6 p-2 border-round-md border-none font-light l-gray3 w-9 lg:w-11 mx-auto" required="true"
                        style={{outline: 'none', boxShadow: 'none', fontSize:'16px'}}/>
                    <label htmlFor="senha" className="font-bold text-xs mb-2 ml-3">Senha*</label>
                    <input 
                        type="password" id="senha" placeholder="Insira sua senha" className="p-2 border-round-md border-none font-light l-gray3 w-9 lg:w-11 mx-auto" required="true"
                        style={{outline: 'none', boxShadow: 'none', fontSize:'16px'}}    
                        />
                    <a href="/Home" rel="" className="bg-pri border-round-lg text-center font-bold whi-t p-3 w-11 lg:w-11 mx-auto" style={{border:'2px solid white'}}>
                        Acesse Conta
                    </a>

                </form>
                <p>Ou faça login com</p>
                <div className="flex justify-content-around mx-auto w-4 lg:w-3" >
                    <a href="https://mail.google.com/" >
                        <img src="./public/m-gmail.png" className="mt-2" style={{width:'20px', height:'15px'}} />
                    </a>
                    <a href="https://www.facebook.com/"> 
                        <img src="./public/face.png" className="mt-auto" style={{width:'30px', height:'25px'}}/>
                    </a>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Login;