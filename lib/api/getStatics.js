export default async function getStatics() {
    const result = await fetch(
        "http://localhost:5000/api/v1/statics?version=0&country=uk",
        {
            next: {
                revalidate: 10,
            },
            // cache: "no-store"
        },

    );

    if (!result.ok) {
        throw new Error("There was an error fetching statics");
    }

    return result.json();
}
