export default async function Leaderboard({ promise }) {
    const leaderboard = await promise;
    // console.log(leaderboard.data)

    return (
        <div className="mt-10">
            <h1 className="text-blue-500">Leaderboard</h1>
            <ul className="mt-6">
                {
                leaderboard?.data?.leaderboards?.length === 0 ? "No participants yet!" :
                leaderboard?.data?.leaderboards?.map((participant) => (
                    <li className="mb-2" key={participant?._id}>
                        {participant?.gamer?.userName}
                    </li>
                ))}
            </ul>
        </div>
    );
}
