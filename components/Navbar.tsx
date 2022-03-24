import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="float-left">
                <Link href="/" passHref>
                    Home
                </Link>
                <Link href="/biography" passHref>
                    Biography
                </Link>
                <Link href="/repertoire" passHref>
                    Repertoire
                </Link>
                <Link href="/media" passHref>
                    Media
                </Link>
                <Link href="/resources" passHref>
                    Resources
                </Link>
            </div>
            <div className="float-right">
                <Link href="/lessons" passHref>
                    <div className="wrap">Book a Lesson</div>
                </Link>
                <div className="img-wrap">
                    <Image
                        src="/esp.svg"
                        alt="esp-logo"
                        width={50}
                        height={30}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
