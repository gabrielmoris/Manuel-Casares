import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="float-left">
                <Link href="/" passHref>
                    <div className="navlink">
                        <h3>Home</h3>
                    </div>
                </Link>
                <Link href="/biography" passHref>
                    <div className="navlink">
                        <h3>Biography</h3>
                    </div>
                </Link>
                <Link href="/repertoire" passHref>
                    <div className="navlink">
                        <h3>Repertoire</h3>
                    </div>
                </Link>
                <Link href="/media" passHref>
                    <div className="navlink">
                        <h3>Media</h3>
                    </div>
                </Link>
                <Link href="/resources" passHref>
                    <div className="navlink">
                        <h3>Resources</h3>
                    </div>
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
