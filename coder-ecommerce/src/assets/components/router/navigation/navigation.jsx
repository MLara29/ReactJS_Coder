import './navigation.css'

export function Navigation() {
    return(
        <>
         <div className="navigation">
            <div className='Logo-NavBar'>
                <a><i className="material-icons">all_inclusive</i></a>
                <a className='Nome-Loja'>Infinity Shop</a>
            </div>
            <div className="Nav-Links">
                
                <a className='Link-Nav' href="">INÍCIO</a>
                <a className='Link-Nav' href="">ELETRÔNICOS</a>
                <a className='Link-Nav' href="">INFORMATICA</a>
                <a className='Link-Nav' href="">GAMES</a>
                <a className='Link-Nav' href="LOGIN">LOGIN</a>
                <a><i className="material-icons">shopping_cart</i></a>
            </div>
         </div>
        </>
    )
}