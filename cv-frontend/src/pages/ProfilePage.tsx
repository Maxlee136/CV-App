import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Member } from "../Interface/Member"; // Ensure this path is correct

const ProfilePage: React.FC = () => {
    const { id } = useParams<string>();
    const [member, setMember] = useState<Member | null>(null);

    useEffect(() => {
        const fetchMemberData = async () => {
            // Define the members array correctly
            const members: Member[] = [
                {
                    id: 1,
                    name: 'Max Lee',
                    role: 'Student',
                    image: '/Max.jpeg',
                    LinkToLinkedIn: 'https://www.linkedin.com/in/max-lee-257182221/',
                    description:
                        'Jeg er en blid student med en passion for fullstack utvikling, mine ferdigheter er hovedsakelig innen Java og React TSX. ' +
                        'Jeg er gründer av to selskaper, hovedsakelig et SAAS selskap kallt Enthemed som er laget for nettbutikker i shopify sitt økosystem' +
                        ''

                },
                {
                    id: 2,
                    name: 'Jeppe Strømberg',
                    role: 'Student',
                    image: '/Jeppe.jpeg',
                    description: 'Another profile description here.',
                    LinkToLinkedIn: ' https://www.linkedin.com/in/jeppe-strømberg-93110b26b/'
                },
                {
                    id: 3,
                    name: 'Andreas Mørkesdal',
                    role: 'Student',
                    image: '/Andreas.jpeg',
                    description: 'Another profile description here.',
                    LinkToLinkedIn: 'https://www.linkedin.com/in/andreas-mørkesdal-7a216a302/'
                },
                {
                    id: 4,
                    name: 'Olai Bergh Oldeide',
                    role: 'Student',
                    image: '/Olai.jpeg',
                    description: 'Another profile description here.',
                    LinkToLinkedIn: 'https://drive.google.com/file/d/1siBjtgegJcGXDxzm8MEJ8u1zNjgSE_bq/view?usp=drive_link'
                },
                {
                    id: 5,
                    name: 'Andreas Wahl Iversen',
                    role: 'Student',
                    image: '/andreaswiv.jpeg',
                    description: 'Another profile description here.',
                    LinkToLinkedIn: 'https://www.linkedin.com/in/andreas-wahl-iversen/'
                },
            ];
            const selectedMember = members.find(m => m.id.toString() === id);
            setMember(selectedMember ?? null);
        };

        fetchMemberData();
    }, [id]);

    if (!member) return <p>Loading member data...</p>;

    return (
        <div>
            <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                <div className="grid justify-center items-center order-1 col-span-1">
                    <img className="lg:h-80 md:h-64 h-40 rounded-full" src={member.image} alt="" />
                </div>
                <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
                    <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">{member.name}</h1>
                    <p className="text-xl text-gray-800 text-center md:text-left">{member.description}</p>
                    <button onClick={() => window.open(member.LinkToLinkedIn, '_blank')} className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">LinkedIn profil</button>
                </div>
            </div>
        </div>
    );
};


export default ProfilePage;
