const Image = () => {
    return ( 
        <>
            <div className="flex w-5 md:w-max">
                <div className="my-auto">
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L2 12L13 23" stroke="#474747" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                    <img src="public/White-Sneakers.png" alt="" className="mt-2 mx-auto"/>
                <div className="my-auto" style={{}}>
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 23L12 12L0.999999 1" stroke="#474747" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </>
     );
}
 
export default Image;