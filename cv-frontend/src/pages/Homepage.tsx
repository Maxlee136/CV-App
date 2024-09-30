import MemberCard from "../components/MemberCard";
import {Member} from "../Interface/Member";
import React from "react";

const HomePage: React.FC = () => {
    const members: Member[] = [
        {
            id: 1,
            name: 'Max Lee',
            role: 'Backend',
            image: '/max.jpg',
            description: 'Hei! Jeg er en blid student med en passion for programmering. Driver eget firma og jobber på Elkjøp. Klikk på kortet mitt for å lære mer om meg.'
        },
        {
            id: 2,
            name: 'Jeppe Strømberg',
            role: 'Backend',
            image: '/jeppe.jpg',
            description: 'Heisann! Jeg er en IT Student på UiA. Trykk på kortet mitt for å lære mer om meg'
        },
        {
            id: 3,
            name: 'Andreas Mørkesdal',
            role: 'Fullstack/Prosjektleder',
            image: '/andreas.jpg',
            description: 'Jeg er en IT student med fagbrev som IKT-servicemedarbeider. Klikk på kortet mitt for å få mer informasjon om meg.'
        },
        {
            id: 4,
            name: 'Olai Bergh Oldeide',
            role: 'Frontend',
            image: '/olai.jpg',
            description: 'Jeg er en IT-student ved UiA med sans for systemutvikling, som føler seg sterkest innen frontend. Trykk på kortet mitt for mer informasjon om meg.'
        },
        {
            id: 5,
            name: 'Andreas Wahl Iversen',
            role: 'Frontend',
            image: '/andreaswiv.jpg',
            description: 'Jeg er sterkest på samarbeid, problemløsning og å skape brukervennlige løsninger.'
        },

    ];
    return (
        <>
            {/* Full-page portrait section */}
            <div className="relative w-full h-screen">
                <img
                    src="/gruppebilde.jpg"
                    alt="Student Portrait"
                    className="absolute inset-0 w-full h-full object-cover
                       /* For desktop */
                    sm:object-[center_-30px] /* Fine-tuning for small screens */
                    md:object-[center_-20px] /* Fine-tuning for medium screens */
                    lg:object-[center_-180px] /* Restore for large screens */"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">GRUPPE 8</h1>
                    <p className="text-white mt-2 text-lg md:text-xl">Bachelor gruppe</p>
                    <button
                        className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                        Lær mer om gruppen
                    </button>
                </div>
            </div>

            {/* Section: About the group */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 mt-10">
                <div className="text-start pb-12">
                    <h2 className="text-base font-bold text-green-400">IS - 310</h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Lær mer om gruppen
                    </h1>
                    <h2 className="mt-6 text-lg font-bold text-slate-600">
                        Vi er en gruppe elever ved UiAs Bachelorprogram for IT og Informasjonssystemer. Vi har
                        valgt sammensetningen av gruppens medlemmer med omhu, basert på de enkeltes ferdigheter.
                        Ved dette er gruppen bygget opp av 2 som føler seg sterkest innen Frontend, 2 som yter
                        best innen Backend, og en gruppeleder som er stødig på Fullstack.
                        <br/> <br/>
                        Gruppen har særlige ønsker om å jobbe med noe innen prosjektutvikling i sin helhet, og
                        har erfaring med dette fra et tidligere prosjekt på bestilling av Nøsted AS.
                    </h2>
                </div>

                {/* Grid of Member Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {members.map((member) => (
                        <MemberCard key={member.id} member={member}/>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
