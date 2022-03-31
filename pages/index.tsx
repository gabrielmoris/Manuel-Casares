import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";



const Home: NextPage = () => {
    return (
        <div className="home">
            <Head>
                <title>
                    Manuel Casares - Concert Pianist and International Piano
                    Teacher
                </title>
                <meta
                    name="description"
                    content="Manuel Casares is a young concert pianist and international piano teacher. He was born in A Coruña and lived in Kraków ( poland ) and Málaga."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
                <div className="img-float-left">
                    <Image
                        src="/manuel.svg"
                        alt="youtube-logo"
                        width={350}
                        height={350}
                        priority
                    />
                </div>
                <div className="text-float-right">
                    <h1>Manuel Casares Gestal</h1>
                    <h3>
                        Concert Pianist & Teacher <br />
                        Master - Academy of Music
                        <br />
                        “Krzysztof Penderecki” in Krakow, Poland
                    </h3>
                </div>
            </main>
        </div>
    );
};

export default Home;
