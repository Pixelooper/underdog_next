import { Suspense } from "react";
import getTourneyDetails from "@/lib/api/getTourneyDetails";
import getTourneyLeaderboard from "@/lib/api/getTourneyLeaderboard";
import Leaderboard from "@/components/Leaderboard";
// import getAllTournaments from "@/lib/getAllTournaments";

export async function generateMetadata({ params }) {
    const { id } = params;
    const tournament = await getTourneyDetails(id);

    return {
        title: tournament.data.tournamentName,
        description: tournament.data.category,
    };
}

export default async function TournamentDetails({ params }) {
    const { id } = params;
    const tournamentPromise = getTourneyDetails(id);
    const leaderboardPromise = getTourneyLeaderboard(id);

    const [tournament, leaderboard] = await Promise.all([tournamentPromise, leaderboardPromise]);
    // const tournament = await tournamentPromise;

    return (
        <div className="mt-6">
            <h2 className="text-blue-500">{tournament.data.tournamentName}</h2>
            <p className="mt-3">Tournament Name: {tournament.data.category}</p>
            <hr />
            <Suspense fallback="<h1>Loading Leaderboard...</h1>">
                <Leaderboard promise={leaderboardPromise} />
            </Suspense>
        </div>
    );
}

// export async function generateStaticParams() {
//     const tournaments = await getAllTournaments();

//     return tournaments.map((tournament) => ({
//         id: tournament._id.toString(),
//     }));
// }
