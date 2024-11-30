import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const Biography: NextPage = () => {
  return (
    <div className="biography">
      <div className="title">
        <h1>Manuel Casares Gestal</h1>
        <h2>A Coruña, Spain, 1994</h2>
      </div>
      <div className="bio-body">
        <p>
          Manuel Casares, recent recipient of the Special Chopin Prize at <i>Turniej Pianistów w Antoninie</i> Competition in Poland, is a versatile
          musician with a distinguished international career. Known for his extensive repertoire as both a soloist and chamber musician, he has graced
          the stage at some of the world&apos;s most esteemed venues, including Carnegie Hall, as well as premier concert halls across Spain, Poland,
          Romania, and the Czech Republic. Casares has earned numerous awards in international piano competitions, affirming his artistry and
          dedication to the piano.
        </p>
        <div className="img-hidden-phone">
          <Image src="/bio1.svg" alt="manuel-casares-playing-piano-nicely" width={250} height={250} priority />
        </div>
      </div>
      <div className="bio-body">
        <Image src="/bio2.svg" alt="manuel-casares-playing-in-concert" width={250} height={250} priority />
        <p>
          Manuel Casares holds a Master Degree in Piano Performance by the Academy <i>Krzysztof Penderecki</i> in Krakow, Poland, where he studied
          under Prof. Andrzej Pikul. He has also had the opportunity to learn from Prof. Ivan Klánský at the Academy of Fine Arts in Prague, Czech
          Republic, and has received masterclasses from Aquiles Delle Vigne, Peter Jablonski, Nino Kereselidze, Alexander Kandelaki, among many
          others.
        </p>
      </div>
      <div className="bio-body">
        <p>
          Paralelly to his career as a concert pianist, teaching and sharing musical knowledge and ideas has always been Manuel Casares’ passion.
          Fluent in six languages and avid user of modern communication technologies, he has taught students from a number of countries in three
          different continents. When he is not playing or teaching, you will find Manuel sharing his music, thoughts and feelings in his YouTube
          channel, dedicated to piano-related pedagogial content.
        </p>
        <div className="img-hidden-phone">
          <Image src="/bio3.svg" alt="manuel-casares-epic-piano-ending" width={250} height={250} priority />
        </div>
      </div>
    </div>
  );
};

export default Biography;
