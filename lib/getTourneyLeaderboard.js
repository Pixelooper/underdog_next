export default async function getTourneyLeaderboard(id) {
    const result = await fetch(
        `http://localhost:5000/api/v1/tournaments/leaderboards/${id}?version=0`,
        {
            next: {
                revalidate: 10,
            },
        }
    );

    if (!result.ok) {
        throw new Error("There was an error fetching the leaderboard");
    }

    return result.json();
}
