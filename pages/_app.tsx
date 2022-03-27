import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar, Footer,Menu } from "../components";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {

    const [hamburger, setHamburger] = useState(false);

    return (
        <>
            <Navbar hamburger={hamburger} setHamburger={setHamburger} />
            <Menu hamburger={hamburger} setHamburger={setHamburger} />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
