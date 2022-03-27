import React from 'react'
import Link from "next/link";

interface Props {
    hamburger: boolean;
    setHamburger: (value: boolean) => void;
}

const Menu = ({ hamburger, setHamburger }: Props) => {
    return (
        <div className={"menu " + (hamburger && "active")}>
            <div
                className="close-hamburger"
                onClick={() => setHamburger(false)}
            ></div>
            <ul>
                <li onClick={() => setHamburger(false)}>
                    <Link href="/" passHref>
                        <div className="navlink">
                            <h3>Home</h3>
                        </div>
                    </Link>
                </li>
                <li onClick={() => setHamburger(false)}>
                    <Link href="/biography" passHref>
                        <div className="navlink">
                            <h3>Biography</h3>
                        </div>
                    </Link>
                </li>
                <li onClick={() => setHamburger(false)}>
                    <Link href="/repertoire" passHref>
                        <div className="navlink">
                            <h3>Repertoire</h3>
                        </div>
                    </Link>
                </li>
                <li onClick={() => setHamburger(false)}>
                    <Link href="/media" passHref>
                        <div className="navlink">
                            <h3>Media</h3>
                        </div>
                    </Link>
                </li>
                <li onClick={() => setHamburger(false)}>
                    <Link href="/resources" passHref>
                        <div className="navlink">
                            <h3>Resources</h3>
                        </div>
                    </Link>
                </li>
                <li onClick={() => setHamburger(false)}>
                    <Link href="/lessons" passHref>
                        <div className="navlink">
                            <h3>Book a Lesson</h3>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu