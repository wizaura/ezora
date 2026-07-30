export interface RouteResult {
    distanceMeters: number;
    distanceText: string;
    durationSeconds: number;
    durationText: string;
}

export class GoogleMapRepository {
    private readonly apiKey = process.env.GOOGLE_MAPS_API_KEY!;

    async calculateRoute(
        origin: string,
        destination: string
    ): Promise<RouteResult> {
        const response = await fetch(
            "https://routes.googleapis.com/directions/v2:computeRoutes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": this.apiKey,
                    "X-Goog-FieldMask":
                        "routes.distanceMeters,routes.duration",
                },
                body: JSON.stringify({
                    origin: {
                        address: origin,
                    },
                    destination: {
                        address: destination,
                    },
                    travelMode: "DRIVE",
                    routingPreference: "TRAFFIC_UNAWARE",
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Unable to connect to Google Routes API.");
        }

        const json = await response.json();

        const route = json.routes?.[0];

        if (!route) {
            throw new Error("Unable to calculate distance.");
        }

        const distanceMeters = route.distanceMeters;
        const durationSeconds = Number(
            route.duration.replace("s", "")
        );

        return {
            distanceMeters,
            distanceText: `${(distanceMeters / 1000).toFixed(1)} km`,
            durationSeconds,
            durationText: formatDuration(durationSeconds),
        };
    }
}

function formatDuration(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.round((seconds % 3600) / 60);

    if (hours === 0) {
        return `${minutes} mins`;
    }

    return `${hours} hr ${minutes} mins`;
}