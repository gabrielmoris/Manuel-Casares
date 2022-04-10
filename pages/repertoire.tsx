import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

const Repertoire: NextPage = () => {
    const [audioPlay, setAudioPlay] = useState(true);
    const [audio, setAudio]: any = useState(null);

    const play = (music: any) => {
        if (audioPlay) {
            audio?.pause();
            setAudio(new Audio(music));
            setAudioPlay(false);
            console.log("pause", audio);
        } else {
            audio?.play();
            setAudioPlay(true);
            console.log("play", audio);
        }
    };

    return (
        <div className="repertoire">
            <div className="title-repertoire">
                <h1>Manuel Casares Gestal</h1>
                <h2>Repertoire</h2>
            </div>
            <div className="body-repertoire">
                <div className="left-repertoire">
                    <h2>Piano Solo</h2>
                    <h3>Bach</h3>
                    <ul>
                        <li>Wide selection of Preludes and Fugues</li>
                        <li
                            className="listen"
                            onClick={() => play("Audios/Bach-italiano.mp3")}
                        >
                            Italian Concerto, BWV 971{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                        <li>
                            Chaconne, from the Violin Partita No. 2 in D minor
                            (arr. Busoni)
                        </li>
                    </ul>
                    <h3>Haydn</h3>
                    <ul>
                        <li>Selection of Sonatas for piano</li>
                    </ul>
                    <h3>Mozart</h3>
                    <ul>
                        <li>Selection of Sonatas for piano</li>
                    </ul>
                    <h3>Beethoven</h3>
                    <ul>
                        <li>Selection of Sonatas for piano</li>
                    </ul>
                    <h3>Chopin</h3>
                    <ul>
                        <li
                            className="listen"
                            onClick={() => play("Audios/ChopinSonata2.mp3")}
                        >
                            Sonata No. 2 in Bb minor op. 35{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                        <li>Sonata No. 3 in B minor op. 58</li>
                        <li
                            className="listen"
                            onClick={() => play("Audios/Chopin-et-op10.mp3")}
                        >
                            Selection of Études op. 10{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                        <li
                            className="listen"
                            onClick={() => play("Audios/Chopin-et-op25.mp3")}
                        >
                            Selection of Études op. 25{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                        <li
                            className="listen"
                            onClick={() => play("Audios/ChopinWaltz.mp3")}
                        >
                            Waltzes Op. 18, 34, 64, post.{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                        <li
                            className="listen"
                            onClick={() => play("Audios/ChopinBalladeGm.mp3")}
                        >
                            Ballade No. 1 in G minor{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                        <li>Mazurkas (Selection)</li>
                        <li>Nocturnes (Selection)</li>
                        <li>Polonaises (Selection)</li>
                        <li>Preludes (Selection)</li>
                        <li
                            className="listen"
                            onClick={() =>
                                play("Audios/Chopin-PolonBrillante.mp3")
                            }
                        >
                            Andante Spianato & Grande Polonaise Brillante, Op.
                            23{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                    </ul>
                    <h3>Schubert</h3>
                    <ul>
                        <li>Four Impromptus op. 90</li>
                        <li>Wanderer-Fantasie</li>
                    </ul>
                    <h3>Schumann</h3>
                    <ul>
                        <li>Kinderszenen op. 15</li>
                        <li>Kreisleriana op. 16</li>
                        <li>Arabesque op. 18</li>
                    </ul>
                    <h3>Debussy</h3>
                    <ul>
                        <li>Deux Arabesques</li>
                        <li>L’isle Joyeuse</li>
                        <li>Suite Pour Le Piano</li>
                        <li>Suite Bergamasque</li>
                        <li>Images (Selection)</li>
                    </ul>
                    <h3>Ravel</h3>
                    <ul>
                        <li>Gaspard de la Nuit</li>
                    </ul>
                    <h3>Albéniz</h3>
                    <ul>
                        <li
                            className="listen"
                            onClick={() => {
                                play("Audios/AlbenizIberia.mp3");
                            }}
                        >
                            Iberia, books 1 & 4{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                        <li>Spanish Suite</li>
                    </ul>
                    <h3>Prokofiev</h3>
                    <ul>
                        <li>Sonata 2 op. 14</li>
                        <li>Sonata 5 op. 38</li>
                        <li>Sonata 7 op. 83</li>
                        <li>Suggestion diabolique, op. 4</li>
                        <li>Pieces op. 12 (Selection)</li>
                    </ul>
                    <h3>Shostakovich</h3>
                    <ul>
                        <li>Sonata No. 2 op. 61</li>
                    </ul>
                    <h2 className="afterunderlined">Concerts</h2>
                    <h3>Haydn</h3>
                    <ul>
                        <li>Concerto in D Major, Hob. XVIII:11</li>
                    </ul>
                    <h3>Mozart</h3>
                    <ul>
                        <li>Concertos 14, 20, 21, 26, 27</li>
                    </ul>
                    <h3>Beethoven</h3>
                    <ul>
                        <li>Concerto no. 2 in b-flat major op. 19</li>
                        <li
                            className="listen"
                            onClick={() =>
                                play("Audios/CONCERTOBeethoven5.mp3")
                            }
                        >
                            Concerto no. 5 in e-flat major op. 73 Emperor{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                    </ul>
                    <h3>Tchaikovsky</h3>
                    <ul>
                        <li
                            className="listen"
                            onClick={() =>
                                play("Audios/CONCERTOTchaikovsky.mp3")
                            }
                        >
                            Concerto no. 1 in b-flat minor op. 23{" "}
                            <Image
                                src="/listen.svg"
                                alt="listen-icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </li>
                    </ul>
                </div>
                <div className="right-repertoire">
                    <h2>Chamber Music</h2>
                    <h3 className="underlined">Violin & Piano</h3>
                    <h3>Beethoven</h3>
                    <ul>
                        <li>Sonata No. 4 in A minor</li>
                        <li>Sonata No. 10 in G Major</li>
                    </ul>
                    <h3>Brahms</h3>
                    <ul>
                        <li>Sonata No. 1 in G Major</li>
                        <li>Sonata No. 3 in D minor</li>
                        <li>Scherzo FAE</li>
                    </ul>
                    <h3>Tchaikovsky</h3>
                    <ul>
                        <li>Souvenir d’un Lieu Cher, op. 42</li>
                        <li>Valse Scherzo, op. 34</li>
                    </ul>
                    <h3>Ravel</h3>
                    <ul>
                        <li>Sonata No. 2 in G Major</li>
                    </ul>
                    <h3>Enescu</h3>
                    <ul>
                        <li>Impressions d’enfance, op. 23</li>
                    </ul>
                    <h4>
                        Numerous violin concertos and other short virtuosic
                        works (Wieniawski, Sarasate, Paganini, etc.)
                    </h4>
                    <h3 className="underlined afterunderlined">
                        Cello & piano
                    </h3>
                    <h3>Beethoven</h3>
                    <ul>
                        <li>Sonata No. 1 in F Major</li>
                        <li>Sonata No. 3 in A Major</li>
                    </ul>
                    <h3>Brahms</h3>
                    <ul>
                        <li>Sonata No. 1 in E minor</li>
                        <li>Sonata No. 2 in F Major</li>
                    </ul>
                    <h3>Grieg (complete works)</h3>
                    <ul>
                        <li>Sonata in A minor op. 36</li>
                        <li>Allegretto (from Violin Sonata No. 3)</li>
                        <li>Intermezzo, EG 115</li>
                    </ul>
                    <h3>Fauré</h3>
                    <ul>
                        <li>Elegie, op. 24</li>
                    </ul>
                    <h3>Hindemith</h3>
                    <ul>
                        <li>Fantasiestücke, op. 8</li>
                    </ul>
                    <h3 className="underlined afterunderlined">
                        Violin, Cello & Piano
                    </h3>
                    <h3>Haydn</h3>
                    <ul>
                        <li>Piano Trio in G Major, Hob. XV:25 (“Gypsy”)</li>
                    </ul>
                    <h3>Mozart</h3>
                    <ul>
                        <li>Piano Trio in Bb Major, KV 502</li>
                    </ul>
                    <h3>Beethoven</h3>
                    <ul>
                        <li>Piano Trio in C minor, Op. 1 no. 3</li>
                    </ul>
                    <h3>Mendelssohn</h3>
                    <ul>
                        <li>Piano Trio in D minor No. 1</li>
                    </ul>
                    <h3>Arensky</h3>
                    <ul>
                        <li>Piano Trio in D minor No. 1</li>
                    </ul>
                    <h3>Rachmaninov</h3>
                    <ul>
                        <li>Piano Trio in G minor No. 1</li>
                    </ul>
                    <h3>Tchaikovsky</h3>
                    <ul>
                        <li>Piano Trio in A minor</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Repertoire;
