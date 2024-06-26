import getAllTournaments from "@/lib/api/getAllTournaments";
import Link from "next/link";

export default async function Tournaments() {
    const tournaments = await getAllTournaments();
    // console.log(tournaments.data);

    return (
        <div className="mt-6">
            <h1 className="text-blue-500">All Tournaments</h1>

            <ul className="mt-6">
                {tournaments.data.map((tournament) => (
                    <li key={tournament._id}>
                        <Link href={`/tournaments/${tournament._id}`}>{tournament.tournamentName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
