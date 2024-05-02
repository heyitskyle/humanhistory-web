import React from 'react';
import '../styles/styles.css';

function Header() {
    return (
        <header className="header-bg bg-cover bg-bottom p-4 pb-0 bg-black flex flex-col items-center justify-end">
            <h1 className="header-h1 font-bold text-9xl" data-text="PRIDE!">PRIDE!</h1>
            <h2 className="header-h2 header-text-shadow text-4xl">A Human History</h2>
        </header>
    );
}

export default Header;