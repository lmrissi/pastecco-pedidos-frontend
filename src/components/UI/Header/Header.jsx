import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="logo">
                <a href='/'>Pastecco</a>
                <img id="pastel" src="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Pastel-PNG.png"
                    alt=""/>
            </div>
            <div class="links">
                <a href="/login">Login</a>
                <a href="/menu">Cardápio</a>
                <a href="/carrinho">Carrinho</a>
            </div>
        </header>
    );
}

export default Header;