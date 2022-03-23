import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer">
            <a
                href="https://www.gabrielcmoris.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{" "}
                <span className="logo">
                    <Image
                        src="/bust.svg"
                        alt="GabrielCMoris-logo"
                        width={25}
                        height={30}
                    />
                </span>{" "}
                All rights reserved © 2021
            </a>
        </div>
    );
};

export default Footer;
