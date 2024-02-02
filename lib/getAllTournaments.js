export default async function getAllTournaments() {
    const result = await fetch(
        "http://localhost:5000/api/v1/tournaments?version=0",
        {
            next: {
                revalidate: 10,
            },
        }
    );

    if (!result.ok) {
        throw new Error("There was an error fetching tournaments");
    }

    return result.json();
}
