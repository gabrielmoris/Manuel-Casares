import React, { useEffect } from "react";
import type { NextPage } from "next";

const Repertoire: NextPage = () => {
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
                        <li>Wide selection of sonatas and fugues</li>
                        <li>Italian Concerto, BWV 971</li>
                        <li>
                            Chaconne, from the Violin Suite No. 2 in D minor
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
                        <li>Sonata No. 2 in Bb minor</li>
                        <li>Sonata No. 3 in B minor</li>
                        <li>Selection of Studies op. 10</li>
                        <li>Selection of Studies op. 25</li>
                        <li>Waltzes Op. 18, 34, 64, post.</li>
                        <li>Ballad No. 1 in G minor</li>
                        <li>Mazurkas (Selection)</li>
                        <li>Nocturnes (Selection)</li>
                        <li>Polonaises (Selection)</li>
                        <li>Preludes (Selection)</li>
                        <li>
                            Andante Spianato & Grande Polonaise Brilliant, Op.
                            23
                        </li>
                    </ul>
                    <h3>Schubert</h3>
                    <ul>
                        <li>Four Impromptus op. 90</li>
                        <li>Wanderer fantasy</li>
                    </ul>
                    <h3>Schumann</h3>
                    <ul>
                        <li>Kreisleriana, Opus 16</li>
                        <li>Arabesque, op. 18</li>
                        <li>Children&#39;s Scenes</li>
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
                        <li>Iberia, notebooks 1 & 4</li>
                        <li>Spanish Suite</li>
                    </ul>
                    <h3>Prokofiev</h3>
                    <ul>
                        <li>Sonatas 2, 5, 7</li>
                        <li>Suggestion diabolique, op. 4</li>
                        <li>Pieces op. 12 (Selection)</li>
                    </ul>
                    <h3>Shostakóvich</h3>
                    <ul>
                        <li>Sonata No. 2</li>
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
                        works (Wieniawski, Sarasate, Paganini)
                    </h4>
                    <h3 className="underlined">Violin & Piano</h3>
                    <h3>Beethoven</h3>
                    <ul>
                        <li>Sonata No. 1 in F Major</li>
                        <li>Sonata No. 3 in A Major</li>
                    </ul>
                    <h3>Brahms</h3>
                    <ul>
                        <li>Sonata No. 1 in E minor</li>
                        <li>Sonata No. 3 in F Major</li>
                    </ul>
                    <h3>Grieg (complete work)</h3>
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
                    <h3 className="underlined">Violin, Cello & Piano</h3>
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
